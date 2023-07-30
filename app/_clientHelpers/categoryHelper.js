import axios from "axios";
import toast from 'react-hot-toast'

export async function getAllCategories(){
    const response = await axios.get('/api/categories')
    console.log(response.data.allCategories)
    return response.data.allCategories
}
export async function getCategoryDetails(){

}
export async function addCategory(category){
    try{
        console.log(category)
        const response = await axios.post('/api/categories',category) //msg,data,status will be received
    console.log("Response in helper",response)
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
        //console.log(error.response.data.msg)
        return {status: false}
        
    }
}
export async function updateCategory(){

}
export async function deleteCategory(){

}