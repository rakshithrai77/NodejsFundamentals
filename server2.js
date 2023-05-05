const http=require("node:http");
const fs=require("node:fs");

const app=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("Home page")
    }

    else if( req.url==='/about')
    {
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("About page");
    }
    else if( req.url==='/api')
    {
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify({name:"rakshith",age:40}));
    }
    else{
        res.writeHead(404);
        res.end("Page not found");
    }
})
const port = process.env.port || 3000;
app.listen(port,()=>console.log("server running on port 3000"));