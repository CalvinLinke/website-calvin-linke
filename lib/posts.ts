export interface Post {
  slug: string;
  titel: string;
  teaser: string;
  datum: string;
  lesezeit: number;
  kategorie: string;
}

const posts: Post[] = [];

export function getRecentPosts(count: number): Post[] {
  return posts.slice(0, count);
}

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDatum(datum: string): string {
  return new Date(datum).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
