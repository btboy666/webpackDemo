/*
 * @Author: your name
 * @Date: 2021-08-24 20:21:17
 * @LastEditTime: 2021-08-27 11:35:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpackDemo/src/index.js
 */

// import "@babel/polyfill"
// const arr = [new Promise(()=>{},new Promise(()=>{}))]

// arr.map((item)=>{
//     console.log(item)
// })

import React,{Component} from "react"
import ReactDom from "react-dom"

class App extends Component{
    render(){
        return <div>hello world</div>
    }
}

ReactDom.render(<App/>,document.getElementById("app"))