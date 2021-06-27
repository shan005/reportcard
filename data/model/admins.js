const mongoose = require('mongoose')
const Schema = mongoose.Schema



const AdminSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = Admins = mongoose.model("admins", AdminSchema)