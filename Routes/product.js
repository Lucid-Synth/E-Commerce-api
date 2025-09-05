import express from 'express'
import product from '../Models/Product.js'

const router = express.Router()

router.post('/', async (req,res) => {
  try{
    const data = req.body
    const newProduct = new product(data)
    const response = await newProduct.save()

    console.log('product saved')
    res.status(200).json(response)
  }
  catch(err){
    console.log(err)
    res.status(500).json({"message":"Internal server error"})
  }
})

router.get('/', async (req,res) => {
  try{
    const data = await product.find()
    console.log('Items fetched')
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
    res.status(500).json({"message":"Internal server error"})
  }
})

router.get('/:id', async (req,res) => {
  try{
    const {id} = req.params
    const data = await product.findById(id)
    console.log('Items fetched')
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
    res.status(500).json({"message":"Internal server error"})
  }
})

router.put('/:id', async(req,res) => {
  try{
    const {id} = req.params
    const data = await product.findByIdAndUpdate(
      id,
      req.body,
    { new: true, runValidators: true })
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log('Items Updated')
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
    res.status(500).json({"message":"Internal server error"})
  }
})

router.delete('/:id',async (req,res) => {
  try {
    const {id} = req.params
    const deletedProduct = product.findByIdAndDelete(id)

    if(!deletedProduct){
      res.status(400).json({"message":"Product not found"})
    }

    res.status(200).json({ message: "Item deleted successfully", deletedItem });
    }catch(err) {
    console.log(err)
    res.status(500).json({"message": "Internal server error"})
  }
})

export default router