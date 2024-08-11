import mongoose from 'mongoose'

const connectDB=async(env)=>{
    mongoose
    .connect(env)
    .then(()=> console.log('connected to database'))
    .catch((err)=>console.log(err))

}

export default connectDB