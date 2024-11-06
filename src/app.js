const express = require('express');
const app = express();
app.use((req,res)=>{
    res.send("hello from express");
});
app.listen(3000,()=>{
    console.log("app listen at port number 3000")
});