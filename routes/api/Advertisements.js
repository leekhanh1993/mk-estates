const express = require('express')
const router = express.Router();

//Advertisement Model
const Advertisement = require('../../models/Advertisement')

//@route GET api/advertisements
//@desc GET All advertisements
//@access Public
router.get('/', (req, res)=>{
    Advertisement.find()
    .then(advertisements => res.json(advertisements))
})

//@route POST api/advertisements
//@desc Create an advertisements
//@access Public
router.post('/', (req, res)=>{
    const newAdvertisement = new Advertisement({
        title: req.body.title,
        price: req.body.price,
        area: req.body.area,
        imageUrl: req.body.imageUrl,
        numbedrooms: req.body.numbedrooms,
        numfloors: req.body.numfloors,
        direction: req.body.direction,
        contactInfo: req.body.contactInfo,
        address: req.body.address,
        postDate: req.body.postDate,
        expiredDate: req.body.expiredDate,
        idUser: req.body.idUser,
        idProject: req.body.idProject
    })
    newAdvertisement.save().then(advertisement => res.json(advertisement))
})

//@route DELETE api/advertisements
//@desc Delete an advertisements
//@access Public
router.delete('/:_id', (req, res)=>{
    Advertisement.findByIdAndRemove(req.params._id)
    .then(removedAd => res.send(removedAd))
    .catch(err => res.status(404).json({success: false}))
    // Advertisement.findById(req.params.id)
    // .then(item => item.remove().then(()=> res.json({success: true})))
    // .catch(err => res.status(404).json({success: false}))
})

//@route UPDATE api/advertisements
//@desc UPDATE an advertisements
//@access Public
router.put('/:_id', (req, res)=>{
    var update = req.body;
    Advertisement.findByIdAndUpdate(req.params._id, update)
    .then(() => res.json({update: true}))
    .catch(err => res.status(404).json({update: false}))
})
//@route GET api/advertisements
//@desc GET an advertisements
//@access Public
router.get('/:_id', (req, res)=>{
    Advertisement.findById(req.params._id)
    .then(advertisement => res.json(advertisement))
    .catch(err => res.status(404).json({get: false}))
})


module.exports = router;