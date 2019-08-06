const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var sassRules = {
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' }
  ]
};
const config = {
  watch:true,
  plugins: [
    // new MiniCssExtractPlugin('final.css')
    new MiniCssExtractPlugin({filename:'./css/styles.css'})
  ],
  // entry: './src/index.js',
  entry:{
    main:['./src/styles.scss','./src/index.js']
  },
  output : {
    filename : './js/bundle.js',
    path : path.resolve(__dirname, 'dist')
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
            // MiniCssExtractPlugin.loader,
            {
              loader:MiniCssExtractPlugin.loader,
              options:{hmr:true}
            },
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
    },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './dist',
     writeToDisk:(filePath)=>{
      return !filePath.includes('hot-update');
     }
  }
}

module.exports = config;