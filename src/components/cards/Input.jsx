"use client";
import React from 'react';

const Card = ({active, answers, field, full, handleOnChange}) =>{
    const ansObj = answers[active] || {};
    const __ = ansObj[field] || '';

    return(
        <input
            name={field}
            className={`${full? "col-span-2": "col-span-1"} border border-gray-300 text-gray-900 sm:text-sm rounded-md block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
            placeholder={field}
            onChange={handleOnChange}
            value={__}
        />
    )
}
export default Card;