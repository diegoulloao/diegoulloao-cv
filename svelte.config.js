import preprocess from 'svelte-preprocess'
import vercel from "@sveltejs/adapter-vercel"
import path from "path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel(),

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
          "@stores": path.resolve("src/stores"),
          "@data": path.resolve("src/data"),
          "@seo": path.resolve("src/seo")
        }
      }
    }
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
}

export default config
