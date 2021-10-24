import preprocess from 'svelte-preprocess';
import path from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/styles/variables.scss";'
					}
        }
      },

      resolve: {
        alias: {
          "@": path.resolve("src"),
          "@styles": path.resolve("src/styles"),
          "@components": path.resolve("src/components"),
        }
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: '@import "src/styles/variables.scss";'
      }
    })
  ]
};

export default config;
