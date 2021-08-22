/*
 * @Author: your name
 * @Date: 2021-08-03 16:34:20
 * @LastEditTime: 2021-08-20 18:32:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpackDemo/webpack.config.js
 */

const path = require("path")
const htmlwebpackplugin =require("html-webpack-plugin");
 module.exports={
     //entry:入口
     //output:出口
     //mode
     entry:"./src/index.js",
     output:{
         path:path.resolve(__dirname,"./build"),
         filename:"main.js"

     },
     mode:"development",
     devServer:{
         contentBase:"./dist",
         open:true,
         port:8080,
         proxy:{
             "/api":{
                 target:"http://localhost:9092"
             }
         }
         
     },
     module:{
         rules:[{
             test:/\.css$/,
             use:["style-loader","css-loader"]
         }
        //  ,{
        //      test:/\.less$/,
        //      use:""
        //  }
        ]
     },
     plugins:[
         new htmlwebpackplugin({
             template:'./src/sssets/html/index.html',
             filename:'index.html'
         })
     ]
 }