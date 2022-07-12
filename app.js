/**
 * Arquivo: app.js
 * Descrição: arquivo principal e responsável pela execução da aplicação.
 * Data: 05/07/2019
 * Author: Glaucia Lemos
 */

 const express = require('express');

 const app = express();
 
 const port = 3000; //process.env.PORT;
 
 app.get('/', (req, res) => {
   res.status(200).send({
     success: 'true',
     message: 'EXITO',
     version: '1.0.0',
   });
 });
 
 app.listen(port);
 console.log(`Applicación ejecutando..: ${port}`);