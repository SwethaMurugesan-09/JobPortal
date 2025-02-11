//In this middleware it decode the token generated used during  registerCompnay  and help to fetch the company id

import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'

//next is used to call the function
export const protectCompany=async(req,res,next)=>{
    const token=req.headers.token

    if(!token)
    {
        return res.json({success:false,meassage:'Not Authorized, Login Again'})
    }
    try{
        const decoded =jwt.verify(token,process.env.JWT_SECRET)
         
        //by using the decoded token we are storing the company data 
        //this will give all the company data except password because we give(-password)
        req.company=await Company.findById(decoded.id).select('-password')

        //callback function
        next()

    }
    catch(error)
    {
        res.json({success:false,message:error.message})
    }
}