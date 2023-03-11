module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'import/no-unresolved': [2, { caseSensitive: false }],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'react/prop-types': 0,
		'import/prefer-default-export': 0,
		'prettier/prettier': 'error',
		'react/jsx-props-no-spreading': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/label-has-associated-control': 0,
		'no-nested-ternary': 0,
		'max-len': ['error', { code: 80 }],
	},
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.js', '.jsx'],
				map: [
					['@', '.'],
					['@components', './src/components'],
					['@assets', './assets'],
					['@hooks', './src/hooks'],
					['@services', './src/services'],
					['@constants', './src/constants'],
					['@views', './src/components/views'],
					['@utils', './src/utils'],
					['@ssr', './src/ssr'],
					['@contexts', './src/contexts'],
				],
			},
		},
	},
};
