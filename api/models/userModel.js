import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { required: true, type: String },
    name: { required: true, type: String },
    password: { required: true, type: String }
})

const userModel = mongoose.models.user || mongoose.model('users', userSchema);
export default userModel