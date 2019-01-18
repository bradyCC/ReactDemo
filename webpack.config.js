const path = require('path')

module.exports = {
  mode: 'development', // development production
  plugins: [ //插件
  ],
  module: { //所有第三方模块的配置规则
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'] //表示这几个文件的后缀名, 可以省略不写
  }
}

