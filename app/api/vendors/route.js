import { NextRequest, NextResponse } from "next/server";
import Vendor from '@/app/models/vendorModel.js'
import dbConnect from '@/app/dbConfig/dbConnect.js'

dbConnect()

export async function GET(request){

    console.log("Request for all vendors received")
    const allVendors = await Vendor.find()
    console.log(allVendors)
    if(!allVendors){
        //console.log(JSON.parse(allProjects))
        return NextResponse.json({msg:"No Vendor found"},{status:400})
    }
    else return NextResponse.json({msg:"ok", allVendors},{status:200})
}

export async function POST(request){
    try{
        const reqBody = await request.json()
        console.log(reqBody)

        //checking project already exists
        const vendorExist = Vendor.findOne({title:reqBody.title})
        if(vendorExist.title){
        //return NextResponse.status(403).json({msg:"Already exist"})
        console.log(vendorExist)
        return NextResponse.json({msg:"Vendor Already exist"}, {status: 400 })
    }

    const newVendor = new Vendor(reqBody)
    const savedVendor = await newVendor.save()
    console.log(savedVendor)
    return NextResponse.json({msg:"Vendor added successfully", data: savedVendor },{status:200})
    }

    catch(error){
        console.log(error)
        return NextResponse.json({msg:"Error in adding vendor", data: error },{status:500})
    }
}

