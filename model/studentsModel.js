const mongoose = require('mongoose');

const student = mongoose.model('student', {
    nisn : String,
    nama : {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    phone : {
        type: String,
        require : true
    }
})

module.exports = student;