import { NextRequest, NextResponse } from "next/server";
import Asset from '@/app/models/assetModel.js'
import dbConnect from '@/app/dbConfig/dbConnect.js'

dbConnect()

export async function GET(request){

    console.log("Request for all assets received")
    const allAssets = await Asset.find()
    //console.log(allCategories)
    if(!allAssets){
        //console.log(JSON.parse(allProjects))
        return NextResponse.json({msg:"No Asset found"},{status:400})
    }
    else return NextResponse.json({msg:"ok", allAssets},{status:200})
}

export async function POST(request){
    try{
        const reqBody = await request.json()
        console.log(reqBody)

        //checking project already exists
        const assetExist = Asset.findOne({title:reqBody.title})
        if(assetExist.title){
        //return NextResponse.status(403).json({msg:"Already exist"})
        console.log(assetExist)
        return NextResponse.json({msg:"Asset already exist"}, {status: 400 })
    }

    const newAsset = new Asset(reqBody)
    const savedAsset = await newAsset.save()
    console.log(savedAsset)
    return NextResponse.json({msg:"Asset created successfully", data: savedAsset },{status:200})
    }

    catch(error){
        console.log(error)
        return NextResponse.json({msg:"Error in adding asset", data: error },{status:500})
    }
}

