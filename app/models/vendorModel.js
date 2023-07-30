import mongoose from 'mongoose';

const vendorSchema = mongoose.Schema({
    title:String,
    description: String
})

const Vendor = mongoose.models.vendors || mongoose.model("vendors", vendorSchema)

export default Vendor