var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/novelas');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, datos) {
    res.json(datos);
  });
});
 
router.put('/:userId', function(req, res, next) {
   var nov = {
   
    Genero: req.body.Genero,
    Titulo: req.body.Titulo,
    Autor: req.body.Autor,
    Anio: req.body.Anio,
    Link: req.body.Link
  };


  User.findOneAndUpdate({
   'id': req.params.userId
  },{$set:nov}, function(err, datos) {
    if (datos == null){
      res.status(404).json({
        mensaje: "No existe"
      });
    } else if (datos.Titulo == null) {
      res.status(204).json({
        mensaje: "Sin contenido"
      });
    }else {
      res.status(200).json(datos);      
    }
  });
});

router.patch('/:userId', function(req, res, next) {
   var nov = {
   
    Genero: req.body.Genero,
    Titulo: req.body.Titulo,
    Autor: req.body.Autor,
    Anio: req.body.Anio,
    Link: req.body.Link
  };


  User.findOneAndUpdate({
   'id': req.params.userId
  },{$set:nov}, function(err, datos) {
    if (datos == null){
      res.status(404).json({
        mensaje: "No existe"
      });
    } else if (datos.Titulo == null) {
      res.status(204).json({
        mensaje: "Sin contenido"
      });
    }else {
      res.status(200).json(datos);      
    }
  });
});
 
router.get('/:userId', function(req, res, next) {
  User.findOne({
    'id': req.params.userId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});

router.post('/', function(req, res, next) {
  var usuario = User({
    id: req.body.id,
    Genero: req.body.Genero,
    Titulo: req.body.Titulo,
    Autor: req.body.Autor,
    Anio: req.body.Anio,
    Link: req.body.Link
  });
 // res.send(usuario);


  usuario.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});

router.delete('/:userId', function(req, res, next) {
  User.findOneAndDelete({
    id: req.params.userId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(201).json(data);
  });

  router.delete('/',function(req,res,next){
    res.status(405).json({mensaje: 'Accion no permitida'});
  });

});

module.exports = router;
