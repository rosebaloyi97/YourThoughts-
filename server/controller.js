const database =require('./database');

//getting all the diary posted

exports.GetAllPost=(req, res)=>{
    database.query('SELECT topic, message FROM newDiary', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            throw err;
        }
    });
}

//posting a new diary
exports.NewDiary=(req, res)=>{
    database.query('INSERT INTO newDiary(topic, message) VALUES (?, ?)', 
    [req.body.topic, req.body.message], (err, rows, fields)=>{
        if(!err){
            res.json(rows)
        } else {
            throw err;
        }
    });
}

exports.DeleteDiary = (req , res)=>{
    
    database.query('DELETE FROM newDiary WHERE diary_id =?', [req.params.diary_id], (err, rows , fields)=>{
        if(!err){
            res.json(rows);
        }else{
            throw err;
        }
    })
}

exports.UpdateDiaryTopic=(req, res)=>{
    database.query('Update newDiary SET topic = ? WHERE diary_id =?', [req.body.topic, req.params.diary_id], (err, rows, fields)=>{
        if(!err){
            res.json(rows)
        }else{
            throw err
        }
    });
}

exports.EditDiaryMessage =(req, res)=>{
    database.query('Update newDiary SET message =? WHERE diary_id= ?', [req.body.message, req.params.diary_id], (err, rows, fields)=>{
        if(!err){
            res.json(rows)
        }else{
            throw err;
        }
    })
}