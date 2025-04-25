import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortid: { type: String, required: true, unique: true },
    click: { type: Number, default: 0 }
}, { timestamps: true }
)

const urls = mongoose.model('urls', urlSchema);

export default urls;