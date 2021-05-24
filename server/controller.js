const database =require('./database');

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