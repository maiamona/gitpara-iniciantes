const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).send({message: 'ola mundo este é o meu repositório'})
})

app.listen(4001, ()=>{
    console.log('Api iniciado na porta 4001')
})