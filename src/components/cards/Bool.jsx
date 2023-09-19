"use client";
import React from 'react';

const Card = ({active, answers, context, answer, handleChange}) =>{
    const __ = answers[active] && answers[active].answer === answer
    return(
        <div onClick={()=>handleChange({context, answer})} className={`${__?"bg-[#1776eb]": "bg-white"} border p-3 cursor-pointer`}>
            <span className={`${__?"text-white": "text-[#1776eb]"} text-center`}>
                <h2 className="text-center">
                    {answer}
                </h2>
            </span>
        </div>
    )
}
export default Card;