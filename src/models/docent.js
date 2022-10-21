const mongoose = require('mongoose');
const campus = require('./campus');

const DocentSchema = new mongoose.Schema({
    voornaam: { type: String },
    naam: { type: String },
    campussen: [{ type: mongoose.Schema.Types.ObjectId, ref: campus }],
}, {
    collection: 'Docent'
});

module.exports = mongoose.model('Docent', DocentSchema);