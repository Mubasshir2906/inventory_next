import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    title:String,
    description: String
})

const Category = mongoose.models.categories || mongoose.model("categories", categorySchema)

export default Category