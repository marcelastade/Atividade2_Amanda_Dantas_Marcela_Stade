const express = require("express");
const router = new express.Router();

const TicketRouter = require('./ticket-route.js');
const AtendenteRouter = require('./atendente-route.js');
const RegistroAtendimentoRouter = require('./registro-route.js');


router.get('/', (req,res) =>{
    res.json({
      message: 'Api no ar!', 
      endpoints:{
        tickets : '/tickets',
        atendentes : '/atendentes',
        registros: '/registros',
        health:'/health'
      }
    })
})

router.get('/health', (req,res)=>{
  res.json({
    status: 'Ok', 
    timestamp: new Date().toISOString()
  })
})

router.use('/tickets', TicketRouter);
router.use('/atendentes', AtendenteRouter);
router.use('/registros', RegistroAtendimentoRouter);
module.exports = router

// let users = [
//   { id: 1, nome: "Thiago Xavier", idade: 40 },
//   { id: 2, nome: "Maria Aparecida", idade: 36 },
// ];

// //endpoint
// router.get("/", (req, res, next) => {
//   try {
//     //const teste = 1
//     //teste = 'teeste'
//     res.status(200).send({
//       success: true,
//       message: "Usuários encontrados",
//       data: users,
//       total: users.length,
//     });
//   } catch (error) {
//     //Status code 500 - indica erro interno
//     res.status(500).json({
//       success: false,
//       message: "Erro interno",
//       error: error.message,
//     });
//   }
// });

// //post
// router.post("/", (req, res, next) => {
//   try {
//     const { nome, idade } = req.body;

//     if (!nome || !idade) {
//       //Status code 400: bad request
//       return res.status(400).json({
//         success: false,
//         message: "Favor enviar os campos: nome e idade",
//       });
//     }
//     const newId = users.length + 1;
//     const newUser = {
//       id: newId,
//       nome,
//       idade,
//     };
//     users.push(newUser);

//     //status code 201: created
//     res.status(201).json({
//       success: true,
//       message: "Criado com sucesso",
//       data: newId,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Ocorreu um erro na criação do usuário",
//     });
//   }
// });

// router.put("/:id", (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const { nome, idade } = req.body;

//   if (!nome || !idade) {
//     //Status code 400: bad request
//     return res.status(400).json({
//       success: false,
//       message: "Favor enviar os campos: nome e idade",
//     });
//   }

//   const userFind = users.findIndex((u) => u.id == id);

//   if (userFind === -1) {
//     return res.status(404).json({
//       success: false,
//       message: "usuário não encontrado!",
//     });
//   }

//   users[userFind] = {
//     id,
//     nome,
//     idade,
//   };

//   res.status(200).json({
//     success: true,
//     message: "Usuário atualizado com sucesso!",
//   });
// });

// //Criar o delete
// router.delete("/:id", (req, res, next) => {
//   try {
//     const id = parseInt(req.params.id);
//     const userIndex = users.findIndex(u => u.id === id);
//     console.log(`Index encontrado : ${userIndex}`);
//     if (userIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: "Indentificador não encontrado",
//       });
//     }
//     //remover da lista
//     const deleteUser = users[userIndex];
//     users.splice(userIndex, 1); //removendo

//     //podemos usar o 204(no content)
//     res.status(200).json({
//       sucess: true,
//       message: "Removido com sucesso",
//     });
//   } catch (error) {
//     console.info(error);
//     res.status(500).json({
//       sucess: false,
//       message: "Erro interno ao deletar o usuário",
//     });
//   }
// });

// module.exports = router;
