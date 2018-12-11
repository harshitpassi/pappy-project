const mongoose = require('mongoose');

var packageSchema = new mongoose.Schema({
    packageID: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    packageName: {
        type: String,
        // required: 'Email can\'t be empty',
        unique: true
    },
    source: {
        type: String,
        // required: 'Password can\'t be empty',
        // minlength: [4, 'Password must be atleast 4 character long']
    },

    price: {
        type: Number,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },

    maxPersons: {
        type: Number,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },
    dates1: {
        type: String,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },
    dates2: {
        type: String,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },
    dates3: {
        type: String,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },

    noOfDays: {
        type: Number,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },

    dayTitle: {
        type: {},
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    },

    dayDescription: {
        type: {} ,
        // required: 'Phone number can\'t be empty',
        // minlength: [10, 'Contact Number must be atleast 10 character long'],
        // unique: true
    }

});

mongoose.model('Package', packageSchema);
