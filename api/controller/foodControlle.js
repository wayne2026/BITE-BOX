import foodModel from '../models/foodModel.js'
// import fs from 'fs'
//add food items

const addFood = async (req, res) => {
    let img_File = `http://localhost:3000/${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: img_File,
    })
    try {
        await food.save()
        res.json({ success: true, message: "food added successfully" })
    } catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}


export { addFood}