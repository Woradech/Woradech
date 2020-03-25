let mongoose = require('mongoose');

//Schema Validation

let userSchema5 = mongoose.Schema({
    fx : {type: String ,required : true },
    a : {type: Number ,required : true},
    b : {type: Number ,required : true}
});

let trapezoidalmodel = mongoose.model('trapezoidalmodel',userSchema5);
module.exports = trapezoidalmodel;
