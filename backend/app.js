import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRouter from './routes/userRoute.js';

const app = express();
const PORT = 9090;

app.use(cors());
app.use(express.urlencoded({extended :true}));
app.use(express.json());



app.use('/', userRouter);



const start = async () => {
    try{
         await mongoose.connect(process.env.ATLASDB_URL);
         console.log("mongodb connected");
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));

    }catch(err){
      console.log('err occurred', err);
    } 

}

start();