const peliculasController={};

const Pelicula=require ('../models/model.peliculas');

//peliculasController.sumar=(req,res)=>{
    //res.send(parseInt(req.params.n1)+parseInt(req.params.n2));
//}

peliculasController.obtenerPeliculas=async(req,res)=>{
    const peliculas=await Pelicula.find();
    res.json(peliculas);
    //res.send('Holaa wee');
    //res.send('Proceso terminado');
};

peliculasController.insertarPelicula=async(req,res)=>{
    const pelicula=await Pelicula.findOne({codigobarras:req.body.codigobarras});
    if(pelicula==null){
       const peliculainsertada=new Pelicula(req.body);
       await peliculainsertada.save();
       res.json('{"Status":"Pelicula Insertada"}') 
    }else{
        res.json('{"Status":"Pelicula Ya Existe con ese codigo de barras!"}') 
    }
};

peliculasController.obtenerPelicula=async(req,res)=>{
    const pelicula=await Pelicula.findOne({"codigobarras":req.params.cb});
    if(pelicula!=null){
    res.json(pelicula);
    }else{
    res.json('{"Status":"No Existe"}')
    }
};

peliculasController.eliminarPelicula=async(req,res)=>{
    const respuesta=await Pelicula.findOneAndDelete({codigobarras:req.params.cb});
    if(respuesta!=null){
        res.json('{"Status":"Pelicula Eliminada"}')
    }else{
        res.json('{"Status":"No Existe"}')
    }
};

peliculasController.actualizarPelicula=async(req,res)=>{
    const respuesta=await Pelicula.findOneAndUpdate({codigobarras:req.params.cb},req.body);
    if(respuesta!=null){
        res.json('{"Status":"Pelicula Actualizada!"}');
    }else{
        res.json('{"Status":"No Existe"}')
    }
};

module.exports=peliculasController;