const express = require('express'); //es una forma de importar el express
const app = express(); // aplicacion de desarrollo orientada a un servicio
const PORT = 3000; //3000 ENFOCADO A BASE DE DATOS 7000 | 5000 ENFOCADO A FRONEND 

// Middleware (intermediario) para leer JSON
app.use(express.json());

//Dato simulado
const post = [
    { id: 1, title : "Primer post"},
    { id: 2, title : "Segundo post"}
]

//Mi primer endpoint para traer post 
 app.get('/posts', (req,res) =>{
    res.json(post)
 });

 //Mi segundo endpoint para guardar un nuevo post 
 app.post('/posts', (req, res) =>{
    const nuevoPost = req.body;
    console.log('Nuevo Post recibido : ', nuevoPost);
    post.push(nuevoPost);
    res.json({message : 'Post agregado correctamente', data : nuevoPost});
 });

 //Mi tercer endpoint para borrar el ultimo post 
app.delete('/posts', (req, res) =>{
    const eliminado = post.pop();
    res.json({ message: 'Último post eliminado correctamente', eliminado });
});

 app.listen(PORT, ()=>{
    console.log(`Esta vivo en servidor http://localhost:${PORT}`);
 })