module.exports = {
	//...
	module: {
		rules: [
			{
				//...
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: "less-loader",
						options: {
							noIeCompat: true,
						},
					},
				],
			},
		],
	},
};
