// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'HTML+CSS+Javascript',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mohankumargupta/htmlcssjavascript' }],
			sidebar: [
				{
					label: 'HTML',
					autogenerate: { directory: 'HTML' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Example Guide', slug: 'guides/example' },
					// ],
				},
				{
					label: 'CSS',
					autogenerate: { directory: 'CSS' },
				},
			],
		}),
	],
});
