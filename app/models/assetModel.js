import mongoose from 'mongoose';
import Category from '@/app/models/categoryModel.js'
import Vendor from '@/app/models/vendorModel.js'

const assetSchema = mongoose.Schema({
    category: String,
    vendor: String,
    title: String,
    description: String,
    icon: String
})

const Asset = mongoose.models.assets || mongoose.model("assets", assetSchema)

export default Asset