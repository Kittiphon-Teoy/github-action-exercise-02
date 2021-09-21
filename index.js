const express = require('express')
const port = process.env.port || 8080
const app = express()

app.get('/user', (req, res) => {
    res.send('No user in the system')
})

app.listen(port, () => {
    console.log('The app is up and running!')
})
module.exports = app