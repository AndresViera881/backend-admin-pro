require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config');

//crear el servidor de express
const app = express();
//Configuracion CORS
app.use(cors());

//Conexion a la base de datos
dbConnection();
console.log(process.env);

//credenciales de la base de datos
//username: mean_user,
//password: FP5daIVTuea3Lawa

//Rutas
app.get('/', (req, resp) =>{
    resp.json({
        ok: true,
        msg: 'Todo bien'
    })
});

app.listen(process.env.PORT, () => {
    console.log('Server on port' + ' ' + process.env.PORT);
})