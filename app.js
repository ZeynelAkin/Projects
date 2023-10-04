var http= require ("http");


var server= http.createServer((request,response)=>
{
    //console.log(request.url,request.method);
    //console.log(response.stat);
    //response.setHeader("Content-Type","Text/html");
    //response.statusCode=200;
    //response.statusMessage="OKK";
    //response.write("<h1>Mother Page</h1>");
    //response.write("<p>products</p>");
    if(request.url=='/'){
        response.writeHead(200,{"Content-Type":"Text/html"});
        
        response.write('<html>
        <head><title>Mother Page</title></head><body> <h1> Mother Pagee</h1></body></html>
        '
        );
             response.end();
    }
    });

server.listen(3000);

console.log("node.js server at port 3000");