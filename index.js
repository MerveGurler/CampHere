const express = require('express')
const bodyParser = require('body-parser')
const campersRouter = require('./routes/campers')
const indexRouter = require('./routes/index')
const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/campers', campersRouter)
app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('started listening in 3000')
})  