import { NextApiRequest } from "next";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(req:NextRequest){
   revalidateTag("pyqs");
   return NextResponse.json({success:true});
}