//express 服务器入口文件

// node 后端服务器
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//解决跨域  
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 后端api路由
app.use('/api', userApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');