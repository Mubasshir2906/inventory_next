import axios from 'axios'

export async function addSwitch(switchData){
    console.log("From Switch helper method")
    console.log(switchData)
    const newSwitch = {...switchData, projectID:"", status:true, dateIn: new Date()}
    const response = await axios.post('/api/switches', switchData)
    console.log(response)
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