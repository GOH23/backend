import mongoose from "mongoose";
const ScaleSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    ScalePrice: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});
export default mongoose.model('ClothesScales',ScaleSchema)