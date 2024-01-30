const {Schema,model}=require('mongoose');
const peliculaShema =new Schema({
    codigobarras:{
        type:String,
        require:true,
        unique:true
    },
    descripcion:String,
    genero:String,
    duracion:String,
    sinopsis:String,
    estreno:Number
},{
    versionKey:false,
    timestamps:true
});
module.exports=model('pelicula',peliculaShema);