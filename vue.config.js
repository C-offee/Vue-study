// vue.config.js
function resolve(str) {
    return __dirname + "/src/" +str
}

module.exports = {
    // 保存时esLint检测改为警告不报错
    lintOnSave: 'warning',

    // 开发服务器
    devServer: {
        // 端口
        port: 8080
    },
    chainWebpack: config => {
        // 配置文件夹路径
        config.resolve.alias
        .set('~c',resolve('components') )
        .set('~v',resolve('views') )
        //set第一个参数：设置的别名，第二个参数：设置的路径

        // 配置网站标题
        config
          .plugin('html')
          .tap(args => {
            args[0].title = 'vue-of-study'
            return args
          })
      }
  }