const Event= require('node:events')
const fs=require('node:fs/promises');
const os=require('node:os')
console.log(os.cpus().length)
const crypto=require("node:crypto")
let start=Date.now()
const MAX_CALLS=20;
for(let i=0;i<MAX_CALLS;i++){
crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
    console.log("hash"+i,Date.now()-start)
})}



/*const emitter =new Event();

emitter.on("Order",()=>{
    console.log("Event is emitted and listened")
})

emitter.emit("Order");
fs.readFile('C:/Users/raksh/OneDrive/Documents/passs.txt','utf-8',(error,data)=>
{
    if(error)
        console.log(error)
    else
        console.log(data)
});
console.log("hello");

fs.writeFileSync('./greet.txt',"hello world");

fs.writeFile('./greet1.txt',"hello world1",{flag:'a'},(error)=>
{
    error?console.log(error):console.log("File written");
})
*/
/*
fs.readFile('C:/Users/raksh/OneDrive/Documents/passs.txt','utf-8').then(
    (data)=>console.log(data)
).catch((error)=>console.log(error));

async function readFile(){
try{
        const data=await fs.readFile('C:/Users/raksh/OneDrive/Documents/passs.txt','utf-8');
        console.log(data)
    }
catch(error)
{
    console.log(error)
}

}

readFile()
*/



