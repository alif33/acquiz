"use client";
import { useRouter } from 'next/navigation';
import React from 'react';


const Submit = () =>{
    const router = useRouter();
    return(
        <div className="min-h-screen bg-slate-100">
            <div className="pt-28">
                <h1 className="text-5xl text-center">Thank you</h1>
            </div>
            <div className="w-[120px] mx-auto mt-5">
                <button onClick={()=>router.back()} className="bg-[#6f00ff] text-white block px-5 py-2">Go back</button>
            </div>
        </div>
    )
}
export default Submit;