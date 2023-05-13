import { ROUTES } from '../../lib/constants';
import type { PageServerLoad } from './$types';

async function getMarkdownFiles() {
	const results = import.meta.glob('./**/*.{md,svx}');

	const posts = await Promise.all(
		Object.entries(results).map(async ([path, page]) => {
			const pageResult = (await page()) as {
				metadata: {
					title: string;
					date: Date;
					tags: string[];
				};
			};
			const { metadata } = pageResult;
			const slug = ROUTES.BLOG_ARTICLE({
				articleSlug: path.split('/').at(1) ?? ''
			});
			return { ...metadata, slug };
		})
	);

	return posts;
}

export const load: PageServerLoad = async () => {
	const posts = await getMarkdownFiles();
	return {
		posts
	};
};
