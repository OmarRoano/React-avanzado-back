const express = require ('express');
const cors = require('cors');
const connectDB = require('./config/db')
const postRoutes = require('./routes/post.routes')
const userRoutes = require('./routes/auth.routes')

const app = express();

connectDB();

//middleware
app.use(cors()); //permite que otros desarrollos se comuniquen con este
app.use(express.json()); //uso de JSONs

//registro de rutas
app.use('/post',postRoutes); //rutas para publicaciones  http://localhost:3000/post
app.use('/user',userRoutes);

module.exports = app;