import dts from "bun-plugin-dts"

await Bun.build({
	entrypoints: ["./src/index.tsx"],
	outdir: "./dist",
	minify: false,
	format: "esm",
	plugins: [dts()],
})
