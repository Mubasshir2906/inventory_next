import { NextRequest, NextResponse } from "next/server";
import Category from '@/app/models/categoryModel.js'
import dbConnect from '@/app/dbConfig/dbConnect.js'

dbConnect()

export async function GET(request){

    console.log("Request for all projects received")
    const allCategories = await Category.find()
    //console.log(allCategories)
    if(!allCategories){
        //console.log(JSON.parse(allProjects))
        return NextResponse.json({msg:"No Category found"},{status:400})
    }
    else return NextResponse.json({msg:"ok", allCategories},{status:200})
}

export async function POST(request){
    try{
        const reqBody = await request.json()
        console.log(reqBody)

        //checking project already exists
        const categoryExist = Category.findOne({title:reqBody.title})
        if(categoryExist.title){
        //return NextResponse.status(403).json({msg:"Already exist"})
        console.log(categoryExist)
        return NextResponse.json({msg:"Category Already exist"}, {status: 400 })
    }

    const newCategory = new Category(reqBody)
    const savedCategory = await newCategory.save()
    console.log(savedCategory)
    return NextResponse.json({msg:"Category created successfully", data: savedCategory },{status:200})
    }

    catch(error){
        console.log(error)
        return NextResponse.json({msg:"Error in creating category", data: error },{status:500})
    }
}

