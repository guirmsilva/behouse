const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: String,
    email: String,
    phoneNumber: String,
    age: Number,
    gender: String,
    medicalNeed: String,
    address: String,
    houseNumber: Number,
    CEP: String,
    city: String,
    state: String,
    parentsName: String,
    parentsPhoneNumber: String,
    parentsPhoneNumber2: String,
    notes: String
});

module.exports = User;