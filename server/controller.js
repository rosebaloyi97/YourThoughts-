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
    database.query('DELETE FROM newDiary WHERE diary_id = :diary_id ', (err, rows , fields)=>{
        if(!err){
            res.json(rows);
        }else{
            throw err;
        }
    })
}