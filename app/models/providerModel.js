import mongoose from 'mongoose';

const providerSchema = mongoose.Schema({
    title:String,
    description: String
})

const Provider = mongoose.models.providers || mongoose.model("providers", providerSchema)

export default Provider