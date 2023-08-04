import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/dbConfig/dbConnect.js'
import Switch from '@/app/models/switchModel'

dbConnect()

export async function GET(request){
    return NextResponse.json({"msg":"This is a respone to GET"}, {status: 200})
}

export async function POST(request){

    try{
        const reqBody = await request.json()
    //    console.log(reqBody)

        //checking project already exists
        const switchExist = Switch.findOne({assetSerial:reqBody.assetSerial})
        if(switchExist.assetSerial){
        //return NextResponse.status(403).json({msg:"Already exist"})
    //    console.log(assetExist)
        return NextResponse.json({msg:"Switch already exist"}, {status: 400 })
    }

    const newSwitch = new Switch(reqBody)
    const savedSwitch = await newSwitch.save()
    console.log("Saved Switch",savedSwitch)
    return NextResponse.json({msg:"Switch added successfully", data: savedSwitch },{status:200})
    }

    catch(error){
    //    console.log(error)
        return NextResponse.json({msg:"Error in adding switch", data: error },{status:500})
    }
}