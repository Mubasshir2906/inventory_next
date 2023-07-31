import mongoose from 'mongoose';

const assetSchema = mongoose.Schema({
    category: String,
    vendor: String,
    title: String,
    description: String,
    icon: String
})

const Asset = mongoose.models.assets || mongoose.model("assets", assetSchema)

export default Asset