const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
  response.json({
    nome: "Rayenne",
    imagem: "https://avatars.githubusercontent.com/u/117834780?v=4",
    minibio: "Desenvolvedora FullStack",
  });
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta);
}

app.use(router.get("/mulher", mostraMulher));
app.listen(porta, mostraPorta);
