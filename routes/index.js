


var express = require('express');
var router = express.Router();
var request=require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/consultar', function(req, res, next) {
  res.render('index2', { title: 'Express' });
});
router.get('/agregar', function(req, res, next) {
  res.render('index3', { title: 'Express' });
});
router.get('/eliminar', function(req, res, next) {
  res.render('index4', { title: 'Express' });
});

/* GET home page. */


router.get('/consultarapi', function(req, res, next) {
var myId = req.query.id;
request('http://localhost:3000/api/novela/'+ myId, function(err,response,data){
	if(err){
		res.status(404).json({
        mensaje: "No existe"
      });
	}else {
  		var datos=JSON.parse(data);
  		if (datos.id==undefined) {
  			res.status(404).json({
        mensaje: "No existe"
      });
  		}
      res.render('index5',{id:datos.id, Titulo:datos.Titulo,
	  Genero:datos.Genero, Autor:datos.Autor, Anio:datos.Anio, Link:datos.Link
});
      console.log(datos.id);
     // console.log(JSON.stringify(data));
    }

});

  //res.render('consultar', { title: 'Express' });
});
router.get('/eliminarapi', function(req, res, next) {
var myId2 = req.query.id;
request.delete('http://localhost:3000/api/novela/'+ myId2, function(err,response,data){
  if(err){
    res.status(404).json({
        mensaje: "No existe"
      });
  }else {
     var datos=JSON.parse(data);
     if(data.id==undefined){
      res.status(404).json({
        mensaje: "No existe"
      });
    }
    	res.status(200).json();
      console.log(data.id);
    }

});

  //res.render('consultar', { title: 'Express' });
});

module.exports = router;
