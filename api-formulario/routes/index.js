const fetch = require("node-fetch");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index');
});

router.post("/api", (req, res) => {
  const content = req.body;
  const message = "Nome: "+content.nome+"\n"+
                  "Email: "+content.email+"\n"+
                  "Telefone: "+content.telefone+"\n"+
                  "Curso: "+content.curso+"\n"+
                  "Data de nascimento: "+content.dataNasc+"\n"+
                  "Conhecimentos: "+content.conhecimentos+"\n";

  fetch("https://hooks.slack.com/services/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", {
    body: "{\"text\":\"" + message + "\"}",
    headers: {
      "Content-Type": "application/json"
    },
    method: "post"
  });

  res.send();
});

module.exports = router;