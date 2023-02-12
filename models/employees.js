const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalZip: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Employees', employeesSchema);