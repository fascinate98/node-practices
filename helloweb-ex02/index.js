const express = require('express');
const http = require('http');
const path = require('path');
const helloRouter =  require('./routes/hello.js');

const port = 9090;

//Application Setup
const application = express()
    //1. static resources    
    .use(express.static(path.join(__dirname + "assets")))
    // 2. request body parser
    .use(express.urlencoded({}))  // application/x-www-form-urlencoded
    .use(express.json())        // application/json
    // 3. view engine
    //4. request router
    .all('*',function(req,res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/hello', helloRouter);   //컨트롤 맨위에 붙히던거같은 느낌 그안에 유저 이런거는 저 라우터안에 
//Server Setup
http
.createServer(application)
.on('listening', function(){
    console.log("http server runs on" + port);
})
.on('error', function(){
    console.error(error);
})
.listen(port);