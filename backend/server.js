import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import medicineRouter from './routes/medicineRoute.js'
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import contactRouter from './routes/contactRoute.js'; // Import the contact route
import adminRouter from './routes/adminRoute.js'; // Import the admin
// Existing routes...

//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/medicine",medicineRouter)
app.use("/images",express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)
app.use('/api/contact', contactRouter); 
app.use('/api/admin', adminRouter);

app.get("/",(req,res)=>{
        res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

