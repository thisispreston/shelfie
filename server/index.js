require("dotenv").config()
const { CONNECTION_STRING, SERVER_PORT } = process.env
const ctrl = require("./controller.js")
const massive = require("massive")
const express = require("express")
const app = express();

app.use(express.json())

//  ENDPOINTS
// app.get('/api/products', ctrl.function)
// app.post('/api/products', ctrl.function)
// app.put('/api/products', ctrl.function)
// app.delete('/api/products', ctrl.function)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
    app.set("db", db)
    console.log("DATABASE HAS CONNECTED")
  })

app.listen(SERVER_PORT, () =>
  console.log(`THE SERVER IS ON PORT ${SERVER_PORT}`)
)