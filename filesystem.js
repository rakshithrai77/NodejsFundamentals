import fs from 'fs';

const read=fs.createReadStream('C:/Users/raksh/OneDrive/Documents/oi.txt');

read.on("data",(chunk)=>{
    console.log(chunk)
});
read.on("end",()=>{
    console.log("finished data reading")});

const a=10;