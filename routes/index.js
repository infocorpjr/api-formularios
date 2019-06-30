const fetch = require("node-fetch");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index');
});

router.post("/api/inscricao", (req, res) =>{
  const content = req.body;
  const message = "Nome: "+content.nome+"\n"+
                  "Email: "+content.email+"\n"+
                  "Telefone: "+content.telefone+"\n"+
                  "Curso: "+content.curso+"\n"+
                  "Data de nascimento: "+content.dataNasc+"\n"+
                  "Conhecimentos: "+content.conhecimentos+"\n";

  fetch(/* curl */, {
    body: "{\"text\":\"" + message + "\"}",
    headers: {
      "Content-Type": "application/json"
    },
    method: "post"
  });

  res.send();
});

router.post("api/brief", (req, res) =>{
  const content = req.body;
  const message = "Nome: "+content.nome+"\n"+
                  "Email: "+content.email+"\n"+
                  "Telefone: "+content.telefone+"\n"+
                  "Curso: "+content.curso+"\n"+
                  "Data de nascimento: "+content.dataNasc+"\n"+
                  "Conhecimentos: "+content.conhecimentos+"\n\n"+
                  "Mensagem\n"+
                    "\tProblemas: "+content.problema+"\n"+
                    "\tBeneficios: "+content.beneficios+"\n"+
                    "\tPublico alvo: "+content.publicoAlvo+"\n"+
                    "\tProduto de interesse: "+content.produtoInteresse+"\n"+
                    "\tExpectativa: "+content.expectativa+"\n";
  
  fetch(/* curl */, {
    body: "{\"text\":\"" + message + "\"}",
    headers: {
      "Content-Type": "application/json"
    },
    method: "post"
  });

  res.send();
})

router.post("api/contato", (req, res) =>{
  const content = req.body;
  const message = "Nome: "+content.nome+"\n"+
                  "Email: "+content.email+"\n"+
                  "Assunto: "+content.subject;

  fetch(/* curl */, {
      body: "{\"text\":\"" + message + "\"}",
      headers: {
        "Content-Type": "application/json"
      },
      method: "post"
    });

    res.send();
  });



  router.post("api/consultor", (req, res) =>{
    const content = req.body;
    const message = "Nome: "+content.nome+"\n"+
                    "Telefone: "+content.telefone+"\n"+
                    "Data de nascimento: "+content.dataNasc+"\n"
                    "Conhecimento: "+content.conhecimentos;
  
    fetch(/* curl */, {
        body: "{\"text\":\"" + message + "\"}",
        headers: {
          "Content-Type": "application/json"
        },
        method: "post"
      });

    res.send();        
})

module.exports = router;