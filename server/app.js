//required depencies
const express =require('express');
const bodyParser =require('body-parser');
const cors =require('cors')
const database = require('./database');
const route =require('./route');
//initializing
const app= express();
const port = 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/Diary', route);

//server
app.listen(port,()=>console.log(`Server running at port: ${port}`));
