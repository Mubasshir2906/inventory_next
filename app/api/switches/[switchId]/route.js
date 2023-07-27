import { NextRequest, NextResponse } from "next/server";

export async function GET(request, { params }){
    return NextResponse.json({"msg":`This is a respone to GET of specific switch ${params.switchId}`}, {status: 200})
}

export async function POST(request){

}