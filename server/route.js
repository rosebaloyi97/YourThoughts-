const express =require('express');
const controller =require('./controller');
const route =express.Router();

//getting all diary posted
route.get("/AllDiaries", controller.GetAllPost);

//writing a new diary
route.post("/NewDiary", controller.NewDiary);

//delete diary
route.delete("/deleteDiary/:id", controller.DeleteDiary);


module.exports =route;