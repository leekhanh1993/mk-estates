const express = require('express')
const router = express.Router();

//User Model
const User = require('./../../models/User')

//@route GET api/users
//@route GET All users
//@route Public
router.get('/', (req, res)=>{
    User.find()
    .then(users => res.json(users))
})

//@route POST api/users
//@route Creatt a user
//@route Public
router.post('/', (req, res)=>{
    const newUser = new User({
        userName: req.body.userName,
        displayName: req.body.displayName,
        password: req.body.password
    })
    newUser.save().then(user => res.json(user))
})

//@route DELETE api/users
//@route delete a user
//@route Public
router.delete('/:_id', (req, res)=>{
    User.findByIdAndRemove(req.params._id)
    .then(deletedUser => res.json(deletedUser))
    .catch(err => res.status(404).json({delete: false}))
})

//@route UPDATE api/users
//@route UPDATE a user
//@route Public
router.put('/:_id', (req, res)=>{
    var update = req.body;
    User.findByIdAndUpdate(req.params._id, update)
    .then(()=>res.json({update: true}))
    .catch(err => res.status(404).json({update: false}))
})

//@route GET api/users
//@route GET a user
//@route Public
router.get('/:_id', (req, res)=>{
    User.findById(req.params._id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({get: false}))
})

module.exports = router;