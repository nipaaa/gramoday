import React from 'react';
import useGramoday from '../hooks/useGramoday';
import Product from './Product';
import Profile from './Profile';

const Business = () => {
    const [details, setDetails] = useGramoday();
    return (
      <div>
         <div className="h-[52vh] overflow-y-scroll lg:w-3/5 mx-auto">
        
      <h1 className="text-[#01A39D] font-bold text-xl mt-2">
        {details.business?.userOption}
      </h1>
      <p className="py-4">
        Market Name
        <span className="font-bold ml-4">{details.business?.marketStdName}</span>
      </p>
      <p className="py-4">
        Firm Name
        <span className="font-bold ml-9">{details.business?.firmName}</span>
      </p>
      <p className="py-4">
        Shop Number
        <span className="font-bold ml-4">{details.business?.mandiShopnum}</span>
      </p>
      <p className="bg-slate-100 font-bold p-2">Products</p>
      {details?.products?.map((product, index) => (
        <Product product={product}  key={index}/>
      ))}
    </div>
      </div>
       
    );
};

export default Business;