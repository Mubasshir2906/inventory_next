import { NextRequest, NextResponse } from "next/server";
import Projects from '@/app/models/projectModel.js'
import dbConnect from '@/app/dbConfig/dbConnect.js'

dbConnect()

export async function POST(request){
    try{
        const reqBody = await request.json()
    console.log(reqBody)

    //checking project already exists
    const projectExist = Projects.findOne({projectCode:reqBody.projectCode})
    if(projectExist){
        //return NextResponse.status(403).json({msg:"Already exist"})
        return NextResponse.json({msg:"Project Already exist"}, {status: 400 })
    }

    const newProject = new Projects(reqBody)
    const savedProject = await newProject.save()
    console.log(savedProject)
    return NextResponse.json({msg:"Project reated successfully", data: savedProject },{status:200})
    }

    catch(error){
        console.log(error)
        return NextResponse.json({msg:"Error in creating project", data: error },{status:500})
    }
}