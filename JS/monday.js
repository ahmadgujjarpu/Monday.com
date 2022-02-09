const express =require("express");
const mysql=require("mysql");
const bodyParser = require("body-parser")
const cors=require("cors");

const app=express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
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



// app.get("/signup",(req, res)=> {
//     console.log(res.sendFile("/ahmad work/Monday.com/signup.html"));
//   });
  app.post("/signup",(req, res)=> {
    var email = req.body.email;
    var password = req.body.password;
    var repassword=req.body.re_password;
    con.query(`INSERT INTO sign_up(email,password,re_enter_password) VALUES ("${email}","${password}","${repassword}")`);
    res.send(req.body);
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




