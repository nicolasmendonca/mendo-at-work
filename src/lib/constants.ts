export type RouteType = '/' | '/blog' | `/blog/${string}`;

export const ROUTES = {
	HOME: () => '/' as const,
	BLOG: () => '/blog' as const,
	BLOG_ARTICLE: (args: { articleSlug: string }) => `/blog/${args.articleSlug}` as const
} as const;
