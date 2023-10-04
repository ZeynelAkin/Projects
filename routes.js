var fs=require("fs");

const routeHandler =(request,response)=>
{


    if (request.url == '/') {
    fs.readFile("motherPage.html",(error,html) =>
    {
        response.writeHead(200, { "Content-Type": "Text/html" });
        response.write(html);
        response.end(); 
    });

    

}else if(request.url=='/zecoder' && request.method=="POST")
{   
        const data=[];
        request.on("data",(chunk)=>
        {
            data.push(chunk);
        });
    
        
        
      
    
}else if(request.url=='/create' && request.method=="POST")
{   
   /* fs.appendFile("blogs.txt","FirstTry",(err)=>// İf blogs.txt exist add to front of last word, otherwise create a new one.
    {
        if(err)
        {
            console.log(err);
        }else
        {
            response.statusCode=302 
            response.setHeader("Location","/zecoder");
            response.end();
        }
    });*/
    const data=[];
    request.on("data",(chunk)=>
    {
        data.push(chunk);
    });

    request.on("end",()=>
    {
        const result=Buffer.concat(data).toString();
        const parsedData=result.split("=")[1];
        fs.appendFile("blogs.txt",parsedData,(err)=>// İf blogs.txt exist add to front of last word, otherwise create a new one.
{
    if(err)
    {
        console.log(err);
    }else
    {
        response.statusCode=302 
        response.setHeader("Location","/");
        response.end();
    }
}); 
    });
    
}else if(request.url=='/create')
{   
    fs.readFile("create.html",(error,html)=>
    {
        response.writeHead(200, { "Content-Type": "Text/html" });
        response.write(html);
        response.end();
    });

    
}
else
{
    fs.readFile("404Page.html",(error,html)=>
    {
        response.writeHead(404, { "Content-Type": "Text/html" });
        response.write(html);
        response.end();
    });

}
}

module.exports=routeHandler;

