const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    address: { type: String },
    image: { type: String }
}, {
    collection: 'Campus'
});

module.exports = mongoose.model('Campus', CampusSchema);