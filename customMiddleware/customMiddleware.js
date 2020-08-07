const Actionsdb = require('../data/helpers/actionModel')
const Projectsdb = require('../data/helpers/projectModel')

module.exports = {
    validateProjectId
}

function validateProjectId(req, res, next) {
    const id = req.params.id
    
    Projectsdb.get(id)
    .then(project => {
        if(project){
            next();
        } else {
            res.status(400).json({ message: "invalid project id" })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
    })
}