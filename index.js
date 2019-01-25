const express = require('express');
const bodyParser = require('body-parser');
require ('dotenv').config();
const ctrl = require('./products_controller')

const massive = require('massive');
const app = express()

app.use(bodyParser.json())


massive(process.env.CONNECTION_STRING)
.then((datab) => {app.set('db', datab)})
.catch((err) => console.log(err))


app.get(`/api/products`, ctrl.getAll)
app.get(`/api/products/:id`, ctrl.getOne)
app.put(`/api/produts/:id?desc=`, ctrl.create)
app.post(`/api/products`, ctrl.create)
app.delete(`/api/products/:id`, ctrl.delete)


const PORT = 3000
app.listen(PORT, ()=> console.log(`We are live at port: ${PORT}`))