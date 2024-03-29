const mongoose = require("mongoose");

const roomschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxCount:{
        type : Number ,
        required : true
    },
    phonenumber:{
       type: Number,
       unique :true
    },
    rentPerDay: {
        type:Number,
        required:true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String, // "private" or "public"
        required: true
    },
    description:{
        type:String,
        required: true
    }
},
    {
        timestamps: true
    })

// module.exports = ("rooomschema",rooomschema);
const roomModel = mongoose.model('rooms',roomschema);

module.exports = roomModel;