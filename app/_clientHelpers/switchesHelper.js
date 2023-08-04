import axios from 'axios'

export async function addSwitch(switchData){
    console.log("From Switch helper method")
    console.log(switchData)
    const newSwitch = {...switchData, status:true, dateIn: new Date(), dateOut:""}
    const response = await axios.post('/api/switches', newSwitch)
    console.log(response)
    if(response.status === 200){
        toast.success("Switch added successfully")
        return response.status
    }
   
}

export async function getSwitchDetails(switchID){
    console.log("From Switch helper method")
    console.log(switchID)
    //const response = await axios.post('/api/switches', switchData)
    console.log(response)
}
export async function updateSwitchDetails(switchDetails){
    console.log("From Switch helper method")
    console.log(switchID)
    //const response = await axios.post('/api/switches', switchData)
    console.log(response)
}
export async function deleteSwitch(switchID){
    console.log("From Switch helper method")
    console.log(switchID)
    //const response = await axios.post('/api/switches', switchData)
    console.log(response)
}