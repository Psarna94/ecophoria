'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ParticipantSchema = new mongoose.Schema({
    name: {
        type:     String,
        required: true
    },
    age:              {
        type:     Number,
        required: true
    },
    email:            {
        type:     String,
        required: true
    },
    phone:            {
        type:     Number,
        required: true
    },
    college:          {
        type:     String,
        required: true
    },
    course:           {
        type:     String,
        required: true
    },
    academic_year:    {
        type:     String,
        required: true
    },
    event:            {
        type:     [String],
        required: true,
        team:     Boolean
    },
    participants:     {
        type: [String]
    }
});

export default mongoose.model('Participant', ParticipantSchema);
