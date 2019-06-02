var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NovelaSchema =  Schema({
  id:Number,
  Genero:String,
  Titulo:String,
  Autor:String,
  Anio:Number,
  Link: String
});


module.exports = mongoose.model('Novela', NovelaSchema);
