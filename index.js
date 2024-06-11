const express = require("express");
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

//Ruta con express
app.get('/',(req , res) =>{
    res.send('hola desde express!!!!')
})

app.get('/factura', (req,res) =>{
    //logica para hacer login o permisos de superuser
    res.sendFile(path.join(__dirname,'private', 'factura.html'));
})

app.get('/frutas', (req, res) =>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, 'frutas.json'))
})

//rutas parametrizadas 
app.get('/productos/:id',(req,res) =>{
    console.log(req.params.id);
    res.send('Producto: ' + req.params.id)
})



const PORT = 3000; // puerto donde se va a ejecutar 

//decimos a la aplicacion que escuche el puerto 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
