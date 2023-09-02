const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
    app.use(express.json()); // this is to parse json in express
    app.use(cors());

app.post("/father",async(req,res)=>{
      try {
            const {name,age,children,budget} = req.body // this will come from the json object 
            const newData = await pool.query(
            "INSERT INTO fathers(id,name,age,child,budget) VALUES(nextval('fathers_id_seq'),$1,$2,$3,$4) RETURNING *",
        [name,age,children,budget]
    );
    res.json(newData.rows)//res.json turns the quesry to some json the shit will uderstand and we get the rows form the object
       
        } catch (error) {
           console.log(error) 
        }
});

app.post("/baby", async(req,res)=>{
   
    try {
         const {name,age,doctor, intrest} = req.body
         const newData = await pool.query(
        "INSERT INTO babies(id,name,age,doctor,intrest) VALUES(nextval('babies_id_seq'),$1,$2,$3,$4) RETURNING *",
        [name,age,doctor,intrest]
    )
    res.json(newData.rows)

    } catch (error) {
console.log(error)
    }
});

app.get("/baby",async (req,res)=>{
    
    try {
        const data = await pool.query(
        "SELECT * FROM babies"
    )
    res.json(data);
    } catch (error) {
        console.log("yup")
    }
});


    app.listen("5000", ()=>{
        console.log("we good")});