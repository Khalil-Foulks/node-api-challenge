const express = require('express');
const Actionsdb = require('../data/helpers/actionModel')
const Projectsdb = require('../data/helpers/projectModel')

const customMw = require('../customMiddleware/customMiddleware')

const router = express.Router();

// Retrieve ALL projects
router.get('/', (req, res) => {
    Projectsdb.get()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

// Retrieve ALL projects by project id
router.get('/:id', (req, res) => {
    const id = req.params.id

    Projectsdb.get(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

// Retrieve ALL actions by project id
router.get('/:id/actions', (req, res) =>{
    const id = req.params.id

    Projectsdb.getProjectActions(id)
        .then(data => {
            res.status(200).json(data)  
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

// ADD a project to list of projects
router.post('/', (req, res) => {
    const body = req.body

    Projectsdb.insert(body)
        .then(data => {
            res.status(201).json({ data }) 
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

// ADD an action to a project by project id
router.post('/:id/actions', customMw.validateProjectId, (req, res) => {
    const body = req.body

    Actionsdb.insert(body)
        .then(data => {
            res.status(201).json({ data }) 
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

//REMOVE an existing project
router.delete('/:id', (req, res) => {
    const id = req.params.id

    Projectsdb.remove(id)
        .then(data => {
            res.status(204).end();
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

//UPDATE an existing project
router.put('/:id', (req, res) => {
    const body = req.body
    const id = req.params.id

    Projectsdb.update(id, body)
        .then(data => {
            res.status(200).json({ body }) 
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

module.exports = router;