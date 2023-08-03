import axios from "axios";
import toast from 'react-hot-toast'

export async function getAllProviders(){
    const response = await axios.get('/api/vendors')
    //console.log(response.data.allVendors)
    return response.data.allVendors
}
export async function getPRoviderDetails(){

}
export async function addProvider(provider){
    try{
        console.log(provider)
        const response = await axios.post('/api/providers',provider) //msg,data,status will be received
    console.log("Response in helper",response)
    switch(response.status){
        case 200 : {
            toast.success("Provider added successfully")
            return {status: true, msg: response.data.msg}
            break;
        }
        case 400 : {
            toast.error("Error in adding provider")
            return {status: false, msg: response.msg}
        }
        case 403 : {
            toast.error("provider already exists")
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
export async function updateProvider(){

}
export async function deleteProvider(){

}