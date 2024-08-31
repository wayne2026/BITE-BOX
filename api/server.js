import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

//api endpoint
app.use('/api/food', foodRouter)
app.use('/api/user',userRouter)
app.use(express.static("./uploads"))

app.get('/', (req, res) => {
    res.send('hello from the other side')
})




const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    } catch (error) {
        console.error(error)
    }
}

startServer()




