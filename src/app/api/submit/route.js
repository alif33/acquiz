import { NextResponse } from "next/server";
import { Quizz } from "@/models";
import connectMongoDB from "@/lib/connectMongo";

export const POST = async (req, res) =>{
    const { email, data } = await req.json();
    await connectMongoDB();

   try {
    const _quizz = new Quizz({ email, data });

    const quizz = await _quizz.save();
    if(quizz){
        return NextResponse.json({
            success: true,
            message: "Submitted successfully"
        })
    }
   } catch (error) {
      console.log(error)
   }
}