const mongoose = require('mongoose');

const ResUsers = new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    mobileno:{type:String},
    password:{type:String},
    type:{type:String},
});

const Doctors = new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    mobileno:{type:String},
    dob:{type:Date},
    gender:{type:Date,enum: ['male', 'female','others']},
    languages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Languages"
    }],
    profile_description:{type:String},
    residential_address:{type:String},
    clinical_address:{type:String},
    latitude:{type:Number},
    longitude:{type:Number},
    country:{type:String},
    state:{type:String},
    city:{type:String},
});
const Languages = new mongoose.Schema({
    name:{type:String},
});

const Resuser = mongoose.model('res_users', ResUsers);
const Doctor = mongoose.model('doctors', Doctors);
const Language = mongoose.model('languages', Languages);



module.exports = {
    Resuser
}