require('dotenv').config();  //punto variables   .env archivo de variables de entorno
const app = require('./src/app')
//const PORT = 3000;

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost: ${PORT}`);
});