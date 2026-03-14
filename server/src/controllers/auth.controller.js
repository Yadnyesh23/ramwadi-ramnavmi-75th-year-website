import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'
import AsyncHandler from '../utils/AsyncHandler.js'
import jwt from 'jsonwebtoken'

const adminLogin = AsyncHandler(
    async(req, res) => {
        const {email , password} = req.body

        if(!email?.trim() || !password) {
            throw new ApiError(400, "All fields are required")
        }

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            throw new ApiError(401, "Invalid credentials")
        }

        const token = jwt.sign(
            {email},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )

        res.cookie("adminToken", token, {
                    httpOnly:true,
                    secure:true,
                    sameSite:"strict"
        })
        .status(200)
        .json(new ApiResponse(200,{token}, "Login successful"))
    }
)

export default adminLogin
