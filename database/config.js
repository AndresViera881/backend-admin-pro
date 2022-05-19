const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {

    try{
        await mongoose.connect(process.env.DB_CNN, {
            usenewUrlParser: true, 
            useunifiedTopology: true, 
        });

        console.log('DB is connected');
    }catch(error){
        console.log(error);
        throw new Error('Error al conectar a la base de datos');
    }
}

module.exports = {
    dbConnection
};