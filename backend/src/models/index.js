const express  = require('express');
const routes = require('./routes');

const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'dbCompaniesReg'
 
});
    
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

connection.query("INSERT INTO company_info(name,CNPJ,CorporateName) VALUES('Nomedaempresa','123','nomesocial')", function(err, result){
    if(!err){
        console.log('Sucess.User added!');
    }else{
        console.log('Error. Unregistered user');
    }
})




app.use(express.json());
app.use(routes);

app.listen(3333);