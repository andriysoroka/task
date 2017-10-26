const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: 'main2.css',
    disable: process.env.NODE_ENV === 'development'
});

  module.exports = {
    entry: './scripts/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
       {
         test: /\.(css|scss)$/,
         use: extractSass.extract({ 
             use: [{
               loader:  'css-loader'
             }, {
                 loader: 'sass-loader'
             }],
             fallback: 'style-loader'
         })
         
       },
         { 
             test: /\.js$/, 
             exclude: /(node_modules|bower_components)/, 
             loader: "babel-loader",
             options: {
                 presets: ['env']
             }
         }
     ]
   },
  plugins: [
       extractSass
  ]
  };