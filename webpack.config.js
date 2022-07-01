var path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname,
		library: 'ImageModule',
		libraryTarget: 'umd',
		filename: "image-module.min.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime']
					}
				}]
			},
			{
				test: /\.svg$/,
				use: [{
					loader: 'raw-loader'
				}]
			}
		]
	}
};
