import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://211356:1oaxRGWpOdlAs2T0@cluster0.ki3z8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
       console.log('DB connected') ;
    })
}