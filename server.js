const express = require('express')
const bodyParser = require('body-parser')
const port = 3333
const app = express()
const router = require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Call Router
router(app)


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})