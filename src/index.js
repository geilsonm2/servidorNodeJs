//Importando uma biblioteca express
const express = require("express") 

/*path com require para trabalharmos com caminhos, */
const path = require("path")

//Com express precisamos criar uma variável app,chamando a função express, retornando uma aplicacao express, trabalhando diretamente com modulo express
const app = express() 

//com router temos o nosso Controlador de Rotas, que nos permite trabalhar com diversos caminhos
const router = express.Router()

/*Chamando a variável router, com metodo get para retornarmos algo, e como parametro passamos "req" e "res", e abrimos uma nova função
com res.SendFile para enviar um arquivo, onde explicamos que queremos enviar inicialmente nossa home.html no diretorio pages e colocamos depois na nossa varivavel app*/
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html")) //com path, podemos fazer um join entre o diretorio atual, com uma de nossas pages.
})
router.get("/contato", (req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

//passando as rotas anteriores em nossa aplicação
app.use(router)

//Colocando nossa aplicação para ouvir nossas requisições, passando nossa porta e criando uma função para retornar uma mensagem do nosso servidor rodando.
app.listen(3333,()=>{
    console.log("Servidor Rodando!")
})