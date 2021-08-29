/*
 * @Author: your name
 * @Date: 2021-08-03 16:34:20
 * @LastEditTime: 2021-08-24 11:30:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpackDemo/webpack.config.js
 */

const path = require("path")
const htmlwebpackplugin =require("html-webpack-plugin");
const glob = require("glob");
const setMPA =()=>{
    const entry={}
    const htmlwebpackplugins =[]
    const entryFiles=glob.sync(path.resolve(__dirname,"./src/*/index.js"))
    console.log(entryFiles)
    entryFiles.map((item,index)=>{
        const entryFile = item
        const match = entryFile.match(/src\/(.*)\/index\.js$/)
        console.log(match,77777)
        const pageName = match && match[1]
        console.log(pageName)
        entry[pageName] = entryFile
        htmlwebpackplugins.push(new htmlwebpackplugin({
            template:path.join(__dirname,`./src/${pageName}/index.html`),
            filename:`${pageName}.html`,
            chunks:[pageName]
        }))
    })
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