const path = require('path')

module.exports = {
  entry: './src/App.tsx',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader'
        },
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }}
        ],
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }   
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
