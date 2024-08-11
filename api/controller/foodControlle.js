import foodModel from '../models/foodModel.js'
import fs from 'fs'

//add food items

const addFood=async(req,res)=>{
    let fileData;
    if (req.file) fileData = `http://localhost:3000/${req.file.filename}`
    res.status(200).json({
        file: fileData
    })
}

export {addFood}