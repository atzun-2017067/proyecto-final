const { Router } = require('express');


const router = Router();

//Manejo de rutas
router.post('/buscar', buscar);


module.exports = router;