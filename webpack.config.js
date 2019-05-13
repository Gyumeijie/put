const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteToFilePlugin = require('write-to-file-webpack');
const pkg = require('./package.json');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './lib/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'README.md', to: path.resolve(__dirname, 'dist', 'README.md') }
    ]),
    new WriteToFilePlugin({
      filename: path.resolve(__dirname, 'dist', 'package.json'),
      data () {
        // We publish the bundled file, so we don't need the following option in pacakage.json
        return JSON.stringify({
          ...pkg,
          dependencies: undefined,
          devDependencies: undefined,
          scripts: undefined
        });
      }
    }),
    new WriteToFilePlugin({
      filename: path.resolve(__dirname, 'dist', 'index.js'),
      data () {
        const content = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.js'));
        // Add #!/usr/bin/env node to the index.js
        return `#!/usr/bin/env node \n ${content.toString()}`;
      }
    })
  ]
};
