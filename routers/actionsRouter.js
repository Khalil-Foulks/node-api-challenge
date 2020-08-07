const express = require('express');
const Actionsdb = require('../data/helpers/actionModel')

const router = express.Router();


// Retrieve ALL actions
router.get('/', (req, res) => {

})

// Retrieve an action by action id
router.get('/:id', (req, res) => {

})

//REMOVE an existing action
router.delete('/:id', (req, res) => {

})

//UPDATE an existing action
router.put('/:id', (req, res) => {

})

module.exports = router;