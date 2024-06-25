import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"@": path.resolve("src"),
			"@styles": path.resolve("src/styles"),
			"@components": path.resolve("src/components"),
			"@stores": path.resolve("src/stores"),
			"@data": path.resolve("src/data"),
			"@seo": path.resolve("src/seo"),
			"@query": path.resolve("src/query-builder"),
			"@helpers": path.resolve("src/helpers")
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "src/styles/_variables.scss";
          @import "src/styles/_colors.scss";
        `
			}
		}
	}
});
