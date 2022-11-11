// INITIALAIZING APP
const express = require('express');
const { router } = require('websocket');
const app = express();
const port = 8080;

// MIDDLEWARES
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// SETTING EJS 
app.set('views', './views');
app.set('view engine', 'ejs');

// PRODUCTS
const products = []

app.get('/', (req, res)=>{
    res.render('pages/index', {products})
});

app.post('/products', (req, res)=>{
    products.push(req.body);
    console.log(products);
    res.redirect('/products')
})

app.get('/products', (req, res)=>{
    res.render('pages/products', {products})
});

// SERVER LISTEN
const server = app.listen(port, ()=>{
    console.log('Server running')
})
server.on('error', error => console.error(`Server is not running ${error}`))