const mysql=require ("mysql")
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "ez_pos"
    })
    con.connect((err)=>{
        if (err){
console.warn("something worng")
        }else{
console.log("conectted")
        }
    })
 module.exports=con;