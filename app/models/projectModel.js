import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    projectCode:String,
    projectName: String,
    description: String,
    comments: String
})

const Project = mongoose.models.projects || mongoose.model("projects", projectSchema)

export default Project