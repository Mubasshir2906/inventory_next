import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    projectID:String,
    projectName: String,
    description: String,
    comments: String
})

const Project = mongoose.projects | mongoose.model("projects", projectSchema)

export default Project