
	import { defineConfig as testConfig } from "vitest/config";
	import { defineConfig } from "vite";
	import react from "@vitejs/plugin-react";

	// Vite configuration
	const config = defineConfig({
	  plugins: [react()],
	    test: {
    environment: 'jsdom',
  },
	});

	// Vitest configuration
	const tstConfig = testConfig({
	  test: {
	  	globals: true,
	    environment: "jsdom",
	    setupFiles: './tests/setup.js'
	  },
	});

	// Merge configurations
	export default {
	  ...config,
	  ...tstConfig,
	};