import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import { defineConfig } from "vite";

export default defineConfig({
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist(">= 0.25%")),
		},
	},
	build: {
		cssMinify: "lightningcss",
	},
});