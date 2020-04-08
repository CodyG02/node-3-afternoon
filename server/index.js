const express = require('express')
const massive = require('massive')
const productCtrl = require('./controllers/products_controller')
require('dotenv').config()

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.get('/api/products', productCtrl.getAll)
app.get('/api/products/:id', productCtrl.getOne)
app.put('/api/products/:id', productCtrl.update)
app.post('/api/products', productCtrl.create)
app.delete('/api/products/:id', productCtrl.delete)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then(dbInstance =>{
    console.log('DB Connected')
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`listening to PORT ${SERVER_PORT}`))
}).catch(err => console.log(err))
