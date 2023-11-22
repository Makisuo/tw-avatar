import dts from "bun-plugin-dts"

await Bun.build({
	entrypoints: ["./src/index.tsx"],
	outdir: "./dist",
	minify: false,
	plugins: [dts()],
})
