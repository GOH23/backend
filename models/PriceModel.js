import mongoose from "mongoose";
const PriceSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});
export default mongoose.model('Prices',PriceSchema)