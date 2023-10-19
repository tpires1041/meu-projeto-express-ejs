const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  {id: 1, nome: "civic", preco: "R$ 105.900", descricao: "descricao", imagem: ""},
  {id: 2, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 3, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 4, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 5, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 6, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 7, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 8, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 9, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
  {id: 10, nome: "nome", preco: "400", descricao: "descricao", imagem: ""},
]

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/civic.ejs', (req, res) => {
  res.render('civic');
});

app.get('/index.ejs', (req, res) => {
  res.render('index');
});

app.get('/pajero.ejs', (req, res) => {
  res.render('pajero');
});

app.get('/porsche.ejs', (req, res) => {
  res.render('porsche');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});