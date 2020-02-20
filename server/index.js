require("dotenv").config()
const { CONNECTION_STRING, SERVER_PORT } = process.env
const ctrl = require("./controller.js")
const massive = require("massive")
const express = require("express")
const app = express();

app.use(express.json())

app.get('/api/products', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.post('/api/product', ctrl.postProduct)
app.delete('/api/products/:id', ctrl.delete)
app.put('/api/products/:id', ctrl.edit)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then(db => {
    app.set("db", db)
    console.log("DATABASE HAS CONNECTED")
  app.listen(SERVER_PORT, () =>
    console.log(`THE SERVER IS ON PORT ${SERVER_PORT}`)
  )
  })

