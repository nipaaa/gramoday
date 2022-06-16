import React from 'react';

const Footer = () => {
    return (
        <div className='my-4'>
              <p className="shadow-xl pl-4 w-[450px] mx-auto rounded-lg text-[#6702EE]">
                <span className='mr-4'>
                join the agricultural community
                </span>
           
              <a
                href="https://play.google.com/store/apps/details?id=net.gramoday.agriculture"
                className="btn btn-md rounded-full bg-gradient-to-t from-[#a16cf7] to-[rgba(98,2,238,.5)] border-0"
              >
                Download gramoday
              </a>
            </p>
        </div>
    );
};

export default Footer;