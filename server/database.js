const mysql =require('mysql');

const connectDatabase= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Diary',
    multipleStatements: true
});

connectDatabase.connect((err)=>{
    if(!err){
        console.log('Database connected successfully')
    }else{
        throw err;
    }
});

module.exports = connectDatabase;