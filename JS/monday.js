const express =require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(cors());
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




