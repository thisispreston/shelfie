const express = require('express')

const PORT = 4010 // this will change when I add database

const app = express()

app.use(express.json())

//  ENDPOINTS
// app.get('/api/products', ctrl.function)
// app.post('/api/products', ctrl.function)
// app.put('/api/products', ctrl.function)
// app.delete('/api/products', ctrl.function)

app.listen( PORT, () => console.log(`The server is on port ${PORT}`))