import mongoose from "mongoose";
const TovarsSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    Type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClothesType',
        required: true
    }
}, {
    timestamps: true,
});
export default mongoose.model('Products',TovarsSchema)