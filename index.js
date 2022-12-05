const express = require("express");
const db = require('./src/models/db');
//const User = require("./User");
const toDoListRouter = require('./src/routes/toDoListRouter');
const toDoItemRouter = require('./src/routes/toDoItemRouter')

db.sequelize.sync().then(()=>{
    console.log("Database is ready");
})

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json(
        {
            "message": "good"
        }
    )
})

app.use('/lists',toDoListRouter);

app.listen(8000, ()=>{
    console.log("Server running on port 8000");
})

