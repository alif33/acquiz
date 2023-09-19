"use client";
import React from 'react';

const Card = ({active, answers, context, answer, handleChange}) =>{
  
    return(
        <div onClick={()=>handleChange({context, answer})} className="flex gap-3 border p-2 cursor-pointer">
            <div className="radio-container my-auto">
                {answers[active] && answers[active]?.answer === answer && <div className="radio"></div>}
            </div>
            <h3 className="my-auto">{answer}</h3>
        </div>
    )
}
export default Card;