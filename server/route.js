const express =require('express');
const controller =require('./controller');
const route =express.Router();

//getting all diary posted
route.get("/AllDiaries", controller.GetAllPost);

//writing a new diary
route.post("/NewDiary", controller.NewDiary);

//delete diary
route.delete("/deleteDiary/:diary_id", controller.DeleteDiary);

//edit diary topic
route.put("/editTopic/:diary_id", controller.UpdateDiaryTopic);

//edit diary message
route.put("/editMessage/:diary_id", controller.EditDiaryMessage);

module.exports =route;