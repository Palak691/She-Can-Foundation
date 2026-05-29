import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.post('/', async (req,res)=>{
    try{

        const {name, email, message} = req.body;
        if(!name || !email || !message){
          return  res.status(400).json({message : "All Fields are required!"});
        }

        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({message : "Email already exists!"})
        }
        const newUser = await User.create({
            name : name,
            email : email,
            message : message
        });
        console.log(newUser);
        res.status(200).json({message : "Form Submitted Successfully."});
    }catch(err){
        console.log(err)
        res.status(500).json("Something went wrong.")
    }
});

export default router;




