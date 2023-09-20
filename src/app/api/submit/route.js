import { NextResponse } from "next/server";
import { Quizz } from "@/models";
import connectMongoDB from "@/lib/connectMongo";
const emailable = require('emailable')("live_ef0d593ed30baf09c7b0");


export const POST = async (req, res) =>{
    const { email, data } = await req.json();
    await connectMongoDB();

   try {
    const validation = await emailable.verify(email);
        if(validation.state==="deliverable"){
            const _quizz = new Quizz({ email, data });
            const quizz = await _quizz.save();
            if(quizz){
                return NextResponse.json({
                    success: true,
                    message: "Submitted successfully"
                })
            }
        }else{
            return NextResponse.json({
                invalid: true,
                success: false,
                message: "Please Provide a valid email"
            })
        }
   } catch (error) {
      console.log(error)
   }
}