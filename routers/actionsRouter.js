const express = require('express');
const Actionsdb = require('../data/helpers/actionModel')

const router = express.Router();


// Retrieve ALL actions
router.get('/', (req, res) => {
    Actionsdb.get()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

// Retrieve an action by action id
router.get('/:id', (req, res) => {
    const id = req.params.id

    Actionsdb.get(id)
    .then(data => {
        res.status(200).json({ data })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: error.message });
    })
})

//REMOVE an existing action
router.delete('/:id', (req, res) => {
    const id = req.params.id

    Actionsdb.remove(id)
        .then(data => {
            res.status(204).end();
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

//UPDATE an existing action
router.put('/:id', (req, res) => {
    const body = req.body
    const id = req.params.id

    Actionsdb.update(id, body)
        .then(data => {
            res.status(200).json({ body }) 
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: error.message });
        })
})

module.exports = router;