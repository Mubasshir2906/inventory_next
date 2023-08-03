import axios from "axios";
import toast from 'react-hot-toast'

export async function getAllProjects(){
    const response = await axios.get('/api/projects')
    //console.log(response.data.allProjects)
    return response.data.allProjects
}
export async function getProjectDetails(){

}
export async function addProject(project){
    try{
        const response = await axios.post('/api/projects',project) //msg,data,status will be received
    //console.log("Response in helper",response)
    switch(response.status){
        case 200 : {
            toast.success("Project added successfully")
            return {status: true, msg: response.data.msg}
            break;
        }
        case 400 : {
            toast.error("Error in adding project")
            return {status: false, msg: response.msg}
        }
        case 403 : {
            toast.error("Project already exists")
            return {status: false, msg: response.msg}
        }
    }
    }
    catch(error){
        toast.error(error.response.data.msg)
        ////console.log(error.response.data.msg)
        return {status: false}
        
    }
}
export async function updateProject(){

}
export async function deleteProject(){

}