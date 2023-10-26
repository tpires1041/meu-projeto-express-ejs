const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  {id: 1, nome: "HONDA CIVIC", preco: "R$ 105.900", descricao: "2017/2017 2.0 16V FLEXONE EXL 4P CVT", imagem: "civic1.jpg"},
  {id: 2, nome: "MITSUBISHI PAJERO SPORT", preco: "R$ 291.060", descricao: "2021/2022 2.4 16V MIVEC TURBO DIESEL HPE AWD AUTOMÁTICO", imagem: "pajero1.jpg"},
  {id: 3, nome: "PORSCHE 911", preco: "R$ 1.860.000", descricao: "2022/2022 3.8 24V H6 GASOLINA TURBO S PDK", imagem: "porsche1.jpg"},
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