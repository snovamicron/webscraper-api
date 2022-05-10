const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    domainName:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    review:[
        {
            index:{
                type:Number,
                required:true
            },
            text:{
                type:String
            }
        }
    ]
},{ timestamps: true })


module.exports = mongoose.model('data', dataSchema)