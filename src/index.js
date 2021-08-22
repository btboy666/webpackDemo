/*
 * @Author: your name
 * @Date: 2021-08-03 11:29:54
 * @LastEditTime: 2021-08-20 18:29:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpackDemo/src/index.js
 */
import css from "./index.css"
import axios from "axios"
axios.get("/api/info").then((res)=>{
    console.log(res,7777777)
})
console.log("hello webpack")
