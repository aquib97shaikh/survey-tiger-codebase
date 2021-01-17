const express = require("express");
const app = express();
const PORT = 9999;
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/survey",async(req,res)=>{
    let survey=[];
    res.send(survey);
})

app.listen(PORT,()=>{
    console.log(`App listening on http://localhost:${PORT}`);
})