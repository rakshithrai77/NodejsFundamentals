import http from 'http'
import fs from 'fs';

http.createServer(function (request,response)
{
    fs.readFile('C:/Users/raksh/OneDrive/Documents/oi.txt',(err,data)=>{
    if(!err && request.url==='/'){
        response.writeHead(200,{'Content-type':'text-plain'})
        for (let i=0;i<1000;i++)
        {
                response.write(i.toString()+"\n")   
        }
        response.end();}
    else{
    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
    console.log(err)
    }})
    
    
}).listen(3307);


/*
const express =require('express');
const app=express();
const port=3007;
app.get("/" ,(request,response)=>
{
    response.send("Hello world");
})

app.listen(port,function(){
    console.log("Listening to port"+port)
});*/

