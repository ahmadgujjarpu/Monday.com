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