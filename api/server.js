import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())



app.post('/', (req, res) =>{
    req.status(200).json(body)
})









app.listen(port, () => {
    console.log(`listening on port ${port}`)
})