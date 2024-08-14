import express from 'express';
import { addFood,addMultiple,deleteFood,listFood } from '../controller/foodControlle.js';
import multer from 'multer';

const foodRouter = express.Router();


//image storage 
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage: storage })


foodRouter.post('/add', upload.single('file'), addFood);
foodRouter.get('/list',listFood);
foodRouter.post("/list/multiple", addMultiple);
foodRouter.delete('/delete/:id',deleteFood);

export default foodRouter