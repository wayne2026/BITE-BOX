import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import foodRouter from './routes/foodRoute.js'
dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


//api endpoint
app.use('/api/food', foodRouter)
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




