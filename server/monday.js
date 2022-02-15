const express =require("express");

const bodyParser = require("body-parser")
const cors=require("cors");
const bcrypt=require("bcrypt");
const app=express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
const mysql=require("mysql");

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
  app.post("/signup",async (req, res)=> {
    var email = req.body.email;
    var password = req.body.password;
    var repassword=req.body.re_password;
    const hash=await bcrypt.hash(password,10);
    const hash2=await bcrypt.hash(repassword,10);
    if(password===repassword){
        con.query(`INSERT INTO sign_up(email,password,re_enter_password) VALUES ("${email}","${hash}","${hash2}")`);
        res.status(200).send(req.body);

    }
    else{
        res.status(404);
        res.send("password does not mathes with re enter password");
    }
   
});
app.post("/login",(req,res)=>{
    console.log(req.body);
    var email=req.body.email;
    var password=req.body.password;
    
    con.query(`select * from sign_up where Email="${email}"`,async (err,result)=>{
        
        if(result){
         const validpass= await  bcrypt.compare(password,result[0].password);
          if(validpass){
              res.send("valid password and email");
          }
          else{
              res.send("wrong password");
          }
        }
        else{
           res.send("user not found"); 
        }
    
    });
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