module.exports = {
	'extends': [
		'plugin:vue/vue3-recommended',
	],
	'rules': {
		'generator-star-spacing': 'off',
		'eol-last': 0,
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		'allowIndentationTab': 0,
		'quotes': ['error', 'single'],
		'no-multiple-template-root': 0,
		// VueJS Specific rules
		'vue/multi-word-component-names': 0,
		'vue/html-indent': 0,
		'vue/max-attributes-per-line': 0,
		'vue/singleline-html-element-content-newline': 0,
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'never',
				'normal': 'always',
				'component': 'always',
			}
		}],
	},
}