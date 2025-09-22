import antfu from "@antfu/eslint-config";

export default antfu({
	stylistic: {
		indent: "tab", // 4, or 'tab'
		quotes: "double",
		semi: true,
	},
	typescript: true, // включаем TypeScript
	prettier: true, // интеграция Prettier
	rules: {
		"no-console": "warn",
		"brace-style": "off",
		"arrow-parens": "off",
		"style/arrow-parens": "off",
		"style/no-tabs": "off",
		"curly": "off",
	},
	prettierOptions: {
		tabWidth: 2,
		useTabs: true,
		semi: true,
		trailingComma: "all",
	},
});
