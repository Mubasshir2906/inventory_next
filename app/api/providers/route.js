import { NextRequest, NextResponse } from "next/server";
import Provider from '@/app/models/providerModel.js'
import dbConnect from '@/app/dbConfig/dbConnect.js'

dbConnect()

export async function GET(request){

    console.log("Request for all providers received")
    const allProviders = await Provider.find()
    //console.log(allVendors)
    if(!allProviders){
        //console.log(JSON.parse(allProjects))
        return NextResponse.json({msg:"No Provider found"},{status:400})
    }
    else return NextResponse.json({msg:"ok", allProviders},{status:200})
}

export async function POST(request){
    try{
        const reqBody = await request.json()
        console.log(reqBody)

        //checking project already exists
        const providerExist = Provider.findOne({title:reqBody.title})
        if(providerExist.title){
        //return NextResponse.status(403).json({msg:"Already exist"})
        console.log(providerExist)
        return NextResponse.json({msg:"Provider Already exists"}, {status: 400 })
    }

    const newProvider = new Vendor(reqBody)
    const savedPRovider = await newProvider.save()
    console.log(savedVendor)
    return NextResponse.json({msg:"Provider added successfully", data: savedPRovider },{status:200})
    }

    catch(error){
        console.log(error)
        return NextResponse.json({msg:"Error in adding provider", data: error },{status:500})
    }
}

