import { streams } from '@/Interfaces/AcademicInterface';
import { getSelectedData } from '@/lib/Academic'
import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';
import {  NextRequest, NextResponse } from 'next/server'
 

const index = {
   cse: 0,
   csce: 1,
   csse: 2,
   it: 3,
 };
export async function GET(req:NextRequest) {
   try {
    const section  =req.nextUrl.searchParams.get("section");
    const semester  =req.nextUrl.searchParams.get("semester");

    const token = await getToken({
      req:req,
      secret:process.env.NEXT_AUTH_SECRET
  })

  if(!token)throw new Error("Token is not found");

  console.log("token",token);
  

    if(section==null || semester==null) throw new Error("Semester is requires");
   //  console.log("url",section,semester);
    const data = await fetch(`https://raw.githubusercontent.com/amitpandey-github/data/main/${section?.toLowerCase()}-${semester}.json`,{
     cache:"no-store"
    }).then(async(d)=> d.json(),
    );
    console.log("datafrom route",data);
    return NextResponse.json({data: data})
   } catch (error) {
    return NextResponse.json({err:error})
   }
}