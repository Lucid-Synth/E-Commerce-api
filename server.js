import express from 'express'
import db from './Database/db.js'
import productRouter from './Routes/product.js'

import { configDotenv } from 'dotenv'
configDotenv(); 


const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use('/api/products', productRouter)

app.get('/', (req,res) => {
  res.send("Welcome to the E-Commerce api")
})



app.listen(port, ()=>{
  console.log("Server is running on " + port)
})