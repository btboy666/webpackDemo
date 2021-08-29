/*
 * @Author: your name
 * @Date: 2021-08-03 16:34:20
 * @LastEditTime: 2021-08-27 11:45:05
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
         path:path.resolve(__dirname,"./dist"),
         filename:"lhsh.js"

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
         ,{
             test:/\.less$/,
             use:["style-loader","css-loader","postcss-loader"]
         },
         {
             test:/\.js$/,
             use:{
                loader:"babel-loader",
                options:{
                    presets:[["@babel/preset-env",{
                       targets:{
                           edge:"16",
                           firefox:'60',
                           chrome:'67',
                       },
                       corejs:2,
                       useBuiltIns:"usage",
                    }],
                "@babel/preset-react"]
                }
             }
         }
        ]
     },
     plugins:[
         new htmlwebpackplugin({
             template:'./src/sssets/html/index.html',
             filename:'index.html'
         })
     ]
 }