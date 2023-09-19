"use client";
import React from 'react';

const Card = ({field, full, userMail, setUserMail}) =>{
    return(
        <input
            type="email"
            name={field}
            className={`${full? "col-span-2": "col-span-1"} border border-gray-300 text-gray-900 sm:text-sm rounded-md block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white capitalize`}
            placeholder={field}
            onChange={e=>setUserMail(e.target.value)}
            value={userMail}
        />
    )
}
export default Card;