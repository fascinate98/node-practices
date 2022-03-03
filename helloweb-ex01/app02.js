const http = require("http");
const fs = require('fs');

const port = 9090;
const server = http.createServer(function(req, resp){
    console.log("request received");
    console.log("request received1");


    if(req.url === '/'){
        req.url = '/index.html';
    }


    //url 해당되는 자원 읽을라고
    //data = fs.readFileSync(''); //동기. 기다리고잇어
    fs.readFile(__dirname + '/public' + req.url, function(error, data){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });
    }); // 비동기야 내려가다가 얘 다실행되면 콜백 함수 불러줘ㅓㅓ

    resp.end(data);
});



server.listen(port, function(){
    console.log("http server running on " + port);
});