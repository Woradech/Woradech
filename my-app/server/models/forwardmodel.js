let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    x : {type: Number ,required : true},
    h : {type: Number ,required : true},
    degree : {type: Number ,require : true}
    
});

let forwardmodel = mongoose.model('forwardmodel',userSchema5);
module.exports = forwardmodel;