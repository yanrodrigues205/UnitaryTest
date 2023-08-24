const app = require("./server");


app.listen(port, () =>{
    console.log(`A aplicação esta rodando no endereço http://localhost:${port}`);
});
