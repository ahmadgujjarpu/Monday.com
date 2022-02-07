const express =require("express");
const mysql=require("mysql");
// const body_parser=require("body-parser");
// const res = require("express/lib/response");
const app=express();

// app.use(body_parser.json());


 const con=mysql.createConnection(
    {
        user: 'root',
        password: '',
        server: 'localhost',
        database: 'mondaycom_clone'
    });
 con.connect((err)=>{
     if(err){
    console.log("not connected");
}
else{
    console.log("connected");
}
});


    // Config your database credential

app.get('/api/projectplan',(req,res)=>{
    
    con.query("select * from project_plans where Project_title='Airbnb'",(err,results)=>{
        if(err){
            console.log("data lost");
        }
        else{
            console.log(results);
        }
        res.send(results);
    });
});
app.get('/api/projectTwitter',(req,res)=>{
    
    con.query("select * from project_plans where Project_title='Twitter'",(err,results)=>{
        if(err){
            console.log("data lost");
        }
        else{
            console.log(results);
        }
        res.send(results);
    });
});

app.listen(3005,() => {
    console.log("server started");
});




