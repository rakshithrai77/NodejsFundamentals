import mysql from 'mysql2'
console.log(mysql)
var pool = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Rakshi9@',
    database : 'sql_store'
    });
   pool.connect((err)=>{
    if(err) throw err;
    console.log("connected succesfully")
   }
    )
    pool.query("select * from orders",(e,r)=>{
    if(r) console.log(r[0])
    else console.log(e)
    });
    pool.query("select * from customers",(e,r)=>{
        if(r) console.log( typeof r[0])
        else console.log(e)
        });
    
    pool.end()
    
    