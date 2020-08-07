const express = require('express');

const server = express();


//Router import Here
const projectsRouter = require('./routers/projectsRouter')
const actionsRouter = require('./routers/actionsRouter')

//Global Middleware Here
server.use(express.json());


server.get('/', (req, res) => {
    res.send(`<h2> Sprint Challenge 1! </h2>`);
})

server.use("/api/projects", projectsRouter)
server.use("/api/actions", actionsRouter)

module.exports = server;