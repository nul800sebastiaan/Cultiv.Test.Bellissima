import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'cultiv.test.bellissima',
    },
    outDir: '/home/runner/work/Cultiv.Test.Bellissima/Cultiv.Test.Bellissima/Cultiv.Test.Bellissima/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/Cultiv.Test.Bellissima
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});
