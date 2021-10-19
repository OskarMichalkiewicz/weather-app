import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

export const mode = 'production';
export const devtool = 'source-map';
export const plugins = [
  new BundleAnalyzerPlugin(),
];