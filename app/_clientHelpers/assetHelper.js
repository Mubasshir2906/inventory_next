import axios from "axios";
import toast from 'react-hot-toast'

export async function getAllAssets(){
    const response = await axios.get('/api/assets')
    ////console.log(response.data.allAssets)
    return response.data.allAssets
}
export async function getAssetDetails(){

}
export async function addAsset(asset){
    try{
        //console.log(asset)
        const formattedAsset = {...asset, title: asset.vendor+" "+asset.title}
        //console.log(formattedAsset)
        const response = await axios.post('/api/assets',formattedAsset) //msg,data,status will be received
    //console.log("Response in helper",response)
    switch(response.status){
        case 200 : {
            toast.success("Asset added successfully")
            return {status: true, msg: response.data.msg}
            break;
        }
        case 400 : {
            toast.error("Error in adding asset")
            return {status: false, msg: response.msg}
        }
        case 403 : {
            toast.error("Asset already exists")
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
export async function updateAsset(){

}
export async function deleteAsset(){

}