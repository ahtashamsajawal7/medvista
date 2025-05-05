// import mongoose from "mongoose";

// const medicineSchema = new mongoose.Schema({
//     name: {type: String,required: true},
//     description: {type: String,required: true},
//     price: {type: Number,required: true},
//     image: {type: String,required: true},
//     category: {type: String,required: true}
// })

// const medicineModel = mongoose.model.medicine || mongoose.model("medicine",medicineSchema);

// export default medicineModel;

import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    quantity: { type: Number, required: true }
});

const medicineModel = mongoose.model.medicine || mongoose.model("medicine", medicineSchema);

export default medicineModel;
