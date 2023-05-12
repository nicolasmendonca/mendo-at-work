export type RouteType = '/' | '/blog';

export const ROUTES = {
	HOME: () => '/' as const,
	BLOG: () => '/blog' as const
} satisfies Record<string, () => RouteType>;
