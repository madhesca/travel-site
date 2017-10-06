//this is webpack and this is to create a file that browser will read. It will copy whats in the scripts/App.js and 
// modify it in temp/scripts/App.js


var path = require('path'); //part of node to make path an absolute path


module.exports = {
	entry: {
		App: './app/assets/scripts/App.js',
		Vendor: './app/assets/scripts/Vendor.js'
	},     //this is to tell webpack w/c file it should begin looking at to create its bundle (App.js)
	output: {									//where the final product should be bundled to
	  path: path.resolve(__dirname, './app/temp/scripts'), //must be absolute path
	  filename: '[name].js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}									  
}	

//after running webpack to commandline change the path in index.html to the consolidated js bundle in temp foLder