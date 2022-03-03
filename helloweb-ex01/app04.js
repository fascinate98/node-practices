const connect = require("connect");
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 9090;
const app = connect();

app.use(connectRoute(function(router){
    router.get("/", function(req, resp){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });
    
        resp.end('<h1>Main World</h1>');
    });

    router.get("/user", function(req, resp){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });
    
        resp.end('<h1>User World</h1>');
    })
}));
app.use(serveStatic(__dirname + "/public"));
app.listen(port, function(){
    console.log("http server running on " + port);
});