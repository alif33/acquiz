"use client";

import Image from 'next/image';
import React from 'react';

const Card = ({active, answers, context, answer, img, handleChange}) =>{

    return(
        <div onClick={()=>handleChange({context, answer})} className="border p-2 cursor-pointer">
            <div className="radio-container">
                {
                    answers[active] && answers[active]?.answer === answer && <div className="radio"></div>
                }
                
            </div>
            <div className="w-full">
                <Image
                    height={100}
                    width={100}
                    src={img}
                    className="block mx-auto"
                    alt="img"
                />
            </div>
            <h3 className="text-center py-1">{answer}</h3>
        </div>
    )
}
export default Card;