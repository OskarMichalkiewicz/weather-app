import { resolve as _resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export const entry = _resolve(__dirname, '..', './src/Index.tsx');
export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
};
export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
  ],
};
export const output = {
  path: _resolve(__dirname, '..', '/build'),
  filename: 'bundle.js',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: _resolve(__dirname, '..', './src/index.html'),
  }),
  new CopyPlugin({
    patterns: [{ from: 'source', to: 'dest' }],
  }),
];