#!/usr/bin/env node
// Sync project to GitHub — creates new files and updates existing ones
// Usage: GITHUB_TOKEN=ghp_xxx node upload-to-github.js

const https = require('https');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error('Error: Set GITHUB_TOKEN environment variable');
  console.error('Usage: GITHUB_TOKEN=ghp_your_token_here node upload-to-github.js');
  process.exit(1);
}

const REPO_NAME = 'website-calvin-linke';
const PROJECT_DIR = path.dirname(__filename);
const SKIP_DIRS = new Set(['node_modules', '.next', '.git']);

function apiRequest(method, urlPath, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const options = {
      hostname: 'api.github.com',
      path: urlPath,
      method,
      headers: {
        'Authorization': `token ${TOKEN}`,
        'User-Agent': 'upload-script',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
      },
    };
    const req = https.request(options, (res) => {
      let raw = '';
      res.on('data', (chunk) => raw += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(raw) }); }
        catch { resolve({ status: res.statusCode, body: raw }); }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function collectFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) files.push(...collectFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function getFileSha(username, relPath) {
  const encodedPath = relPath.split('/').map(encodeURIComponent).join('/');
  const res = await apiRequest('GET', `/repos/${username}/${REPO_NAME}/contents/${encodedPath}`);
  return res.status === 200 ? res.body.sha : null;
}

async function main() {
  console.log('Checking GitHub token...');
  const userRes = await apiRequest('GET', '/user');
  if (userRes.status !== 200) {
    console.error('Invalid token:', userRes.body.message || userRes.status);
    process.exit(1);
  }
  const username = userRes.body.login;
  console.log(`Logged in as: ${username}\n`);

  const files = collectFiles(PROJECT_DIR).filter(f => !f.endsWith('upload-to-github.js'));
  console.log(`Syncing ${files.length} files...\n`);

  let created = 0, updated = 0, failed = 0;

  for (const filePath of files) {
    const relPath = filePath.slice(PROJECT_DIR.length + 1);
    const content = fs.readFileSync(filePath).toString('base64');
    const encodedPath = relPath.split('/').map(encodeURIComponent).join('/');

    const sha = await getFileSha(username, relPath);
    const payload = {
      message: sha ? `Update ${relPath}` : `Add ${relPath}`,
      content,
      ...(sha ? { sha } : {}),
    };

    const res = await apiRequest(
      'PUT',
      `/repos/${username}/${REPO_NAME}/contents/${encodedPath}`,
      payload
    );

    if (res.status === 201) {
      console.log(`  + ${relPath}`);
      created++;
    } else if (res.status === 200) {
      console.log(`  ↑ ${relPath}`);
      updated++;
    } else {
      console.log(`  ✗ ${relPath} — ${res.body.message || res.status}`);
      failed++;
    }
    await sleep(300);
  }

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`${created} created, ${updated} updated, ${failed} failed`);
  console.log(`\nhttps://github.com/${username}/${REPO_NAME}`);
}

main().catch(err => { console.error(err); process.exit(1); });
