import fs from 'fs'
import medicineModel from '../models/medicineModel.js'

//add medicine item

// const addMedicine = async (req,res) =>{

//     let image_filename = `${req.file.filename}`;

//     const medicine = new medicineModel({
//         name: req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename,
//         expiryDate: expiryDateFormatted, // Add expiryDate to the model
//         quantity: quantityParsed, // Add quantity to the model
//     })

//     try {
//         await medicine.save();
//         res.json({success:true,message:'Medicine Added'})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false, message:'Error'})
//     }
// }
const addMedicine = async (req, res) => {
    console.log("Received request to add medicine");
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    let image_filename = `${req.file.filename}`;

    // Parse expiryDate and quantity correctly
    const expiryDateFormatted = new Date(req.body.expiryDate); // Ensure expiryDate is a Date
    const quantityParsed = parseInt(req.body.quantity, 10); // Ensure quantity is an integer

    const medicine = new medicineModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
        expiryDate: expiryDateFormatted, // Correctly set expiryDate
        quantity: quantityParsed, // Correctly set quantity
    });

    try {
        await medicine.save();
        res.json({ success: true, message: 'Medicine Added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};


// All medicine list

const listMedicine = async (req,res) =>{
    try {
        const medicines = await medicineModel.find({});
        res.json({success:true,data:medicines})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}

// remove medicine item

const removeMedicine = async (req,res)=>{
    try {
        const medicine = await medicineModel.findById(req.body.id);
        fs.unlink(`uploads/${medicine.image}`,()=>{})

        await medicineModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'Medicine Removed'})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:'Error'})
    }
}

export {addMedicine, listMedicine, removeMedicine}