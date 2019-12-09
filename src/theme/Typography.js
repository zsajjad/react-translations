import Typography from "typography";
// import configs from 'configs';

// const { customFonts, headerFontFamily, bodyFontFamily, ...typographyConfigs } =
//   configs.typography || {};

export default new Typography({
	// baseLineHeight: 1.5,
	baseFontSize: 16,
	headerWeight: "400",
	scaleRatio: 2,
	headerFontFamily: [
		"Inter",
		"Roboto",
		"Open Sans",
		"Segoe UI",
		"Helvetica",
		"Arial",
		"sans-serif"
	],
	bodyFontFamily: ["Inter", "Roboto", "Open Sans", "sans-serif"]
	// ...typographyConfigs,
});
