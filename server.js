const express = require("express");
const app = express();

const port = 4000;


app.get("/", (req, res)=>{
    res.send({mensagem: "Esta é a rota inicial da aplicação!"});
});


module.exports = app