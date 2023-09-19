import Image from 'next/image';
import React from 'react';

const Header = () =>{
    return(
        <div className="bg-black py-2">
            <Image
                height={41}
                width={439}
                src="/img/logo.png"
                className="block mx-auto"
                alt="logo"
            />
        </div>
    )
}
export default Header;