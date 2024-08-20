import foodModel from '../models/foodModel.js'
import fs from 'fs'
import path from 'path'

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
        res.status(500).json({ error })
    }
}

//display all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.status(200).json({ success: true, message:'all data fetched',data: foods })
    } catch (error) {
        console.error(error)
    }
}
//add many
export const addMultiple = async (req, res) => {
    const foodItems = req.body;
    try {
        const result = await foodModel.insertMany(foodItems);
        res.status(201).json({ success: true, message: "Food items added successfully", data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to add food items', error });
    }
}

//remove food by id
const deleteFood = async (req, res) => {
    try {
        const foodId = req.params.id
        const food = await foodModel.findById(foodId)
        if(!food){
            return res.status(404).json({success: false, message: 'food not found'})
        }
        const deleteData = await foodModel.findOneAndDelete({ _id: foodId })
        const filename = path.basename(food.image)
        fs.unlink(`uploads/${filename}`,(err)=>{
            if (err) {
                console.error('Error deleting file:', err);
            }
        })
        if (!deleteData) {
            res.status(404).json({ success: false, message: 'food not found' })
        }
        res.status(200).json({ success: true, data: deleteData,message: 'food deleted successfully' })
    } catch (error) {
        console.error(error)
    }
}

const deletedDataBase=async (req,res)=>{
    try {
        const deleteAll=await foodModel.deleteMany({})
        res.json({message:'deleted all'})

    } catch (error) {
        console.error(error)
    }
}


export { addFood, listFood, deleteFood ,deletedDataBase}