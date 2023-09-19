import Image from 'next/image';
import React from 'react';

const Footer = () =>{
    return(
        <div className="bg-[#6f00ff]">
            <div className="w-11/12 grid grid-cols-12">
                <div className="">
                    <Image
                        height={41}
                        width={439}
                        src="/img/logo.png"
                        alt="logo"
                    />
                </div>

            </div>
        </div>
        
    )
}
export default Footer;