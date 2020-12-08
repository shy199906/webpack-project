const path = require('path'); //加载path模块
module.exports = {
    mode:'development',// 模式 production生产环境  development 开发环境
    entry: {
        index: './src/index.js',
        poroduct:'./src/product.js'
    }, // 入口
    output: { // 打包出口
        path: path.resolve(__dirname, '../dist/'), // 打包文件输出路径  绝对路径 获取当前的绝对路径
        // filename: 'bundle.js' // 打包文件输出名称
        filename: '[name].[hash].js' //[name] [hash] hash码
    }
}