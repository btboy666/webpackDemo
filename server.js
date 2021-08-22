/*
 * @Author: your name
 * @Date: 2021-08-20 17:52:35
 * @LastEditTime: 2021-08-20 17:56:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /webpackDemo/src/server.js
 */

const express = require ('express')
const app = express()

app.get("/api/info",(req,res)=>{
    res.json({
        name:"laohan"
    })
})

app.listen("9092")