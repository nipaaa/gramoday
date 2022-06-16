import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

  const navigate = useNavigate();
  const navigateToDetails = id => {
    navigate(`/business/${id}`)
  }

  return (
    <div
      onClick={()=> navigateToDetails(`${product.posts[0]._id}`)}
      className="shadow-md p-2 m-2 rounded-xl">
      <div className="flex items-center space-x-8 ">
        <img
          className="h-[100px] w-[100px] border border-black"
          src={`https://gramoday-images-public.s3.ap-south-1.amazonaws.com/commodity/${product.picUrl}`}
          alt=""
        />
        <div className="w-full">
          <h1 className="text-[20px] font-semibold">
            {product.cmdtyStdName} {product?.posts[0]?.marketType}
          </h1>
          <p>
            {product?.posts[0]?.marketStdName},
            {product?.posts[0]?.loclevel3Name},
            {product?.posts[0]?.loclevel2ShortName}
          </p>
          <div className="flex justify-between">
            <p>{product?.posts[0]?.updatedAt.split("T")[0]}</p>
            <p>
              <i>
                Updated at
                {product?.posts[0]?.updatedAt.split("T")[1].split(".")[0]}
              </i>
            </p>
          </div>
          <p className="my-2">
            $ {product?.posts[0]?.priceDetails[0]?.maxPrice} -
            {product?.posts[0]?.priceDetails[0]?.minPrice} /
            {product?.posts[0]?.rawPriceConvFctr}
            {product?.posts[0]?.rawReportPriceUnit}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-evenly mt-2">
        <button className="btn btn-xs rounded-full bg-[#01A39D] border-0 ">
          <i class="mr-2 fa-brands fa-whatsapp"></i>
          Share
        </button>
        <button className="btn btn-xs rounded-full bg-[#D2AA1B]  border-0 ">
          <i class="mr-2 fa-solid fa-paper-plane"></i>
          Interested
        </button>
      </div>
    </div>
  );
};

export default Product;