const http = require('http');

const getMessage = ()=>{
    let date = new Date ().getHours();
    if(date >= 6 && date <=12) { return 'Buenos dias' }
    else if(date >= 13 && date <=19) {return 'Buenas tardes'}
    else{return 'buenas noches'}
}

const server = http.createServer((req, res)=>{
  res.end(
    getMessage()
)
})

const connect = server.listen(8880, ()=>{
    console.log('Escuchando servidor con exito')
})