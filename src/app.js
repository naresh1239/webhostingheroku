const express = require('express');
require("./db/conn");
const dream = require("./models/usermassage")
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'hbs');

app.get("/", (req, res)=>{
    res.render('index')
   
})
app.post("/databas", async(req, res)=>{
    try {
        
        const dreamdata = new dream(req.body);
        await dreamdata.save();
        res.status(201).render('databas');
    } catch (e){
        res.status(500).send(e);
    }
   
})
app.get("*", (req, res)=>{
    res.render('error')
})
app.listen(port, ()=>{
    console.log(`i m listening ${port}`)
})