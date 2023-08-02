import mongoose from 'mongoose';

const switchSchema = mongoose.Schema({
    projectName: String,
    assetModel:String,
    assetSerial:String,
    assetName:String,
    assetVendor: String,
    status:Boolean,
    dateIn: Date,
    dateOut: Date,
    datePurchased: Date,
    assetImage: String,
    comments: String
})

const Switch = mongoose.models.switches || mongoose.model("switches", switchSchema)

export default Switch