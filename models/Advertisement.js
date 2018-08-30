const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Advertisement Schema
const AdvertisementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    numbedrooms: {
        type: String,
        required: true
    },
    numfloors: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postDate: {
        type: String,
        required: true
    },
    expiredDate: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    idProject: {
        type: String,
        required: true
    }
})

module.exports = Advertisement = mongoose.model('advertisement', AdvertisementSchema)