const {Router}=require('express');
const router=Router();

const peliculasController=require('../controllers/controller.peliculas');
//obtiene todas las peliculas
router.get('/',peliculasController.obtenerPeliculas);
//
router.post('/',peliculasController.insertarPelicula);
//
router.get('/:cb',peliculasController.obtenerPelicula);
//
router.delete('/:cb',peliculasController.eliminarPelicula);
//
router.put('/:cb',peliculasController.actualizarPelicula);

//router.get('/',peliculasController.sumar);

module.exports=router;