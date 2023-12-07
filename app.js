const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));



const produtos = [
  {id: 1, nome: "HONDA CIVIC", preco: "R$ 105.900", descricao: "2017/2017 2.0 16V FLEXONE EXL 4P CVT", imagem: "civic1.jpg", imagem2: "civic2.jpg"},
  {id: 2, nome: "MITSUBISHI PAJERO SPORT", preco: "R$ 291.060", descricao: "2021/2022 2.4 16V MIVEC TURBO DIESEL HPE AWD AUTOMÁTICO", imagem: "pajero1.jpg", imagem2: "pajero2.jpg"},
  {id: 3, nome: "PORSCHE 911", preco: "R$ 1.860.000", descricao: "2022/2022 3.8 24V H6 GASOLINA TURBO S PDK", imagem: "porsche1.jpg", imagem2: "porsche2.jpg"},
  {id: 4, nome: "VOLKSWAGEN SAVEIRO", preco: "R$ 68.590", descricao: "1.6 MSI ROBUST CS 8V FLEX 2P MANUAL", imagem: "saveiro1.jpg", imagem2: "saveiro2.jpg"},
  {id: 5, nome: "CHEVROLET ONIX", preco: "R$ 89.790", descricao: "1.0 TURBO FLEX PLUS LTZ MANUAL", imagem: "onix1.jpg", imagem2: "onix2.jpg"},
  {id: 6, nome: "CHEVROLET CRUZE", preco: "R$ 115.990", descricao: "1.4 TURBO LT 16V FLEX 4P AUTOMÁTICO", imagem: "cruze1.jpg", imagem2: "cruze2.jpg"},
  {id: 7, nome: "VOLKSWAGEN VOYAGE", preco: "R$ 58.990", descricao: "1.0 12V MPI TOTALFLEX 4P MANUAL", imagem: "voyage1.jpg", imagem2: "voyage2.jpg"},
  {id: 8, nome: "HYUNDAI HB20", preco: "R$ 79.090", descricao: "1.0 TGDI FLEX EVOLUTION AUTOMÁTICO", imagem: "hb201.jpg", imagem2: "hb202.jpg"},
  {id: 9, nome: "TOYOTA COROLLA", preco: "R$ 123.490", descricao: "2.0 VVT-IE FLEX GLI DIRECT SHIFT", imagem: "corolla1.jpg", imagem2: "corolla2.jpg"},
  {id: 10, nome: "FIAT CRONOS", preco: "R$ 68.790", descricao: "1.3 FIREFLY FLEX MANUAL", imagem: "cronos1.jpg", imagem2: "cronos2.jpg"},
]


function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', {produtos});
});


app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', {produto});
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});