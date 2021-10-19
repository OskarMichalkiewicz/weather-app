import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

export default (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
}