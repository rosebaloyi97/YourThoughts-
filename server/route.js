const express =require('express');
const controller =require('./controller');
const route =express.Router();

//writing a new diary
route.post("/NewDiary", controller.NewDiary);


module.exports =route;