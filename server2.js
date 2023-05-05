const http=require("node:http");
const cluster=require("node:cluster");
const os=require('node:os')

console.log(os.cpus().length)
//cluster.schedulingPolicy = cluster.SCHED_RR;
if(cluster.isMaster)
{
    console.log("Master",process.pid);
    cluster.fork();
    cluster.fork();
}
else{
console.log("child process",process.pid)
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("Home Page")
    }
    else if(req.url==='https://node-service-usry.onrender.com/slowpage')
    { 
        for(let i=0;i<6000000000;i++)
        {

        }
        res.writeHead(200,{"Content-type":"text/plain"})
        res.end("slow page")
    }
})

server.listen(3000,()=>{console.log("Listening on 3000")})}