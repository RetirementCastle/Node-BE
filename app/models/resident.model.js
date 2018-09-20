const mongoose = require('mongoose');

const ResidentSchema = mongoose.Schema({
    name: String,
    birth_date: Date,
    admission_date: Date,
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    state: String,
    contact_name: String,
    contact_phone: Number,
    diseases: String
}, {
    timestamps: false
});

module.exports = mongoose.model('Resident', ResidentSchema);
