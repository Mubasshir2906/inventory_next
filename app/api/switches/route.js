import { NextRequest, NextResponse } from "next/server";
import dbConnect from '@/app/dbConfig/dbConnect.js'
import Switch from '@/app/models/switchModel'

dbConnect()

export async function GET(request){
    return NextResponse.json({"msg":"This is a respone to GET"}, {status: 200})
}

export async function POST(request){
    const reqBody = await request.json()
    console.log("Request body",reqBody.category)
    return NextResponse.json({data: reqBody},{status:200})
}