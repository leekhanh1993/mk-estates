const express = require('express')
const router = express.Router();

//Project Model
const Project = require('../../models/Project')

//@route GET api/projects
//@route GET All projects
//@route Public
router.get('/', (req, res)=>{
    Project.find()
    .then(projects => res.json(projects))
})

//@route POST api/projects
//@route Creatt a project
//@route Public
router.post('/', (req, res)=>{
    const newProject = new Project({
        name: req.body.name,
        owner: req.body.owner,
        typePro: req.body.typePro,
        totalArea: req.body.totalArea,
        startYear: req.body.startYear,
        endYear: req.body.endYear
    })
    newProject.save().then(project => res.json(project))
})

//@route DELETE api/projects
//@route delete a project
//@route Public
router.delete('/:_id', (req, res)=>{
    Project.findByIdAndRemove(req.params._id)
    .then(deletedPro => res.json(deletedPro))
    .catch(err => res.status(404).json({delete: false}))
})

//@route UPDATE api/projects
//@route UPDATE a project
//@route Public
router.put('/:_id', (req, res)=>{
    var update = req.body;
    Project.findByIdAndUpdate(req.params._id, update)
    .then(()=>res.json({update: true}))
    .catch(err => res.status(404).json({update: false}))
})

//@route GET api/projects
//@route GET a project
//@route Public
router.get('/:_id', (req, res)=>{
    Project.findById(req.params._id)
    .then(project => res.json(project))
    .catch(err => res.status(404).json({get: false}))
})

module.exports = router;