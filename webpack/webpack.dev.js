import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const mode = 'development'
export const devServer = {
  hot: true,
  open: true,
}
export const devtool = 'cheap-module-source-map'
export const plugins = [
  new ReactRefreshWebpackPlugin(),
]