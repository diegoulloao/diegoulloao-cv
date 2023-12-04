import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				prependData: `
          @import "src/styles/_variables.scss";
          @import "src/styles/_colors.scss";
        `
			}
		})
	]
};

export default config;
