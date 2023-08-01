import axios from "axios";
import toast from 'react-hot-toast'

export async function getAllVendors(){
    const response = await axios.get('/api/vendors')
    //console.log(response.data.allVendors)
    return response.data.allVendors
}
export async function getCategoryDetails(){

}
export async function addVendor(vendor){
    try{
        console.log(vendor)
        const response = await axios.post('/api/vendors',vendor) //msg,data,status will be received
    console.log("Response in helper",response)
    switch(response.status){
        case 200 : {
            toast.success("Vendor added successfully")
            return {status: true, msg: response.data.msg}
            break;
        }
        case 400 : {
            toast.error("Error in adding vendor")
            return {status: false, msg: response.msg}
        }
        case 403 : {
            toast.error("Vendor already exists")
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