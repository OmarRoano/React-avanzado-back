const mongoose = require('mongoose')

const conectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            //useNewUrlParser: true,
           //useUnifiedTopology:true
        });
        console.log('--- 🟢 MongoDB conectado');
    }catch(error){
         console.error('--- 🔴 Error al conectar con MongoDb: ', error.message);
         process.exit(1);
    }
};

module.exports = conectDB;