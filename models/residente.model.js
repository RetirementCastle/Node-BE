const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ResidenteSchema = new Schema({
    nombre: {type: String, required: true},
    cedula: {type: Number, required: true},
    edad: {type: Number, required: true},
});


module.exports = mongoose.model('Product', ResidenteSchema);
