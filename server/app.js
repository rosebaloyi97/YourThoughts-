//required depencies
const express =require('express');
const bodyParser =require('body-parser');
const cors =require('cors')
const mysql = require('mysql');
const database = require('./database');

//initializing
const app= express();
const port = 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());

//server
app.listen(port,()=>console.log(`Server running at port: ${port}`));
