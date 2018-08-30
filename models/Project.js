const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Project Schema
const ProjectSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    typePro:{
        type: String,
        required: true
    },
    totalArea: {
        type: String,
        required: true
    },
    startYear:{
        type: String,
        required: true
    },
    endYear: {
        type: String,
        required: true
    }
})

module.exports = Project = mongoose.model('project', ProjectSchema)