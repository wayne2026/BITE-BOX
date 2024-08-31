import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import zod from 'zod'
import dotenv from 'dotenv'
dotenv.config()
const emailSchema = zod.string().email()
const passwordSchema = zod.string()
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character")


const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })
        if (user && await bcrypt.compare(password, user.password,)) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

            res.cookie('token', token, {
                httpOnly: true, // Cookie cannot be accessed by client-side scripts
                // secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
                secure:false,
                maxAge: 3600000 // 1 hour
            });

            res.json({ token: token, success: true, message: "You are now signed in" })
        }
        else {
            res.status(401).json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
    }

}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    //ZOD Validation
    const emailResponse = emailSchema.safeParse(email)
    const passwordResponse = passwordSchema.safeParse(password);
    if (!passwordResponse.success) {
        return res.status(400).json({ success: false, message: passwordResponse.error.errors[0].message });
    }
    if (!emailResponse.success) {
        return res.json({ message: "invalid email", success: false })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already registered" })
        }
        await newUser.save()
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET,{expiresIn:'1h'})
        res.cookie('token', token, {
            httpOnly: true, // Cookie cannot be accessed by client-side scripts
            // secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
            secure:false,
            maxAge: 3600000 // 1 hour
        });
        return res.json({ success: true, message: "user added successfully" ,token: token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Failed to register user" })
    }

}


export { loginUser, registerUser }