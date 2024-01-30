//const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');

//Conexion a Mongo
mongoose.connect('mongodb+srv://jhonatan:8TPEBPG7iHKmlI4h@clusterjhonatan.vwu3jpq.mongodb.net/VideoClub?retryWrites=true&w=majority')
    .then(db => console.log('Conectado a Mongo Atlas'))
    .catch(err => console.error(err));
