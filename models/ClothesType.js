import mongoose from "mongoose";
const ClothesType = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});
export default mongoose.model('ClothesType',ClothesType)