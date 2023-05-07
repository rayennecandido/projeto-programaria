const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [{
    nome: 'Rayenne',
    imagem: 'https://avatars.githubusercontent.com/u/117834780?v=4',
    minibio: "Desenvolvedora FullStack"
},
{
    nome: 'Iana Chan',
    imagem: '',
    minibio: 'Fundadora da PrograMaria'
},
{
    nome: 'Nina da Hora',
    imagem: '',
    minibio: 'Hacker antirracista'
}]


function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);
