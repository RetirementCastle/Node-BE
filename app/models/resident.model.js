const mongoose = require('mongoose');

const ResidentSchema = mongoose.Schema({
    name: String,
    age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Resident', ResidentSchema);
