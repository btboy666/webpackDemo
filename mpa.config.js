/*
 * @Author: your name
 * @Date: 2021-08-03 16:34:20
 * @LastEditTime: 2021-08-23 20:44:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpackDemo/webpack.config.js
 */

const path = require("path")
const htmlwebpackplugin =require("html-webpack-plugin");
const glob = require("glob")
const setMPA =()=>{
    const entry={}
    const htmlwebpackplugin =[]
     const entryFiles=glob.sync(path.resolve(__dirname,"./src/*/index.js"))
     console.log(entryFiles)
    return {
        entry,
        htmlwebpackplugins
    }
}
const {entry,htmlwebpackplugins} = setMPA()
 module.exports={
     entry,
     output:{
         path:path.resolve(__dirname,"./build"),
         filename:"[name].js"

     },
     mode:"development",
     plugins:[...htmlwebpackplugins]
 }