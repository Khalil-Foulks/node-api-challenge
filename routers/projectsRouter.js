const express = require('express');
const Actionsdb = require('../data/helpers/actionModel')
const Projectsdb = require('../data/helpers/projectModel')

const customMw = require('../customMiddleware/customMiddleware')

const router = express.Router();

// Retrieve ALL projects
router.get('/', (req, res) => {

})

// Retrieve ALL projects by project id
router.get('/:id', (req, res) => {

})

// Retrieve ALL actions by project id
router.get('/:id/actions', (req, res) =>{

})

// ADD a project to list of projects
router.post('/', (req, res) => {

})

// ADD an action to a project by project id
router.post('/:id/actions', customMw.validateProjectId, (req, res) => {

})

//REMOVE an existing project
router.delete('/:id', (req, res) => {

})

//UPDATE an existing project
router.put('/:id', (req, res) => {

})

module.exports = router;