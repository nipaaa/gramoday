import React from 'react';
import { useParams } from 'react-router-dom';
import useGramoday from '../hooks/useGramoday';

const ProductDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useGramoday();
    console.log(details.products);

    return (
        <div className="h-[60vh] overflow-y-scroll lg:w-3/5 mx-auto">

            <div>
                <div className='flex justify-between'>
                <div className="flex">
                    <div className="avatar my-auto">
                        <div className="w-14 h-14 rounded-full ">
                            <img src='img/profile.svg' alt="" />
                        </div>
                    </div>
                    <div className='ml-8'>
                        <h1 className=" font-bold">{details.name}</h1>
                        <p className="my-2">
                            {details.loclevel3Name}, {details.loclevel2Name}
                        </p>
                        </div>
                        </div>

                       
                        <i class="bg-[#01A39D] px-2 h-1/2 text-white rounded-full text-xl fa-brands fa-whatsapp"></i>
                </div>
           
                       

            </div>


            <div>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr  className='text-[#01A39D]'>
                                <th>Rates</th>
                                <th className='flex justify-end text-xl'><i class="fa-solid fa-indian-rupee-sign"></i></th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* {
                                details.products[0]?.posts[1]?.priceDetails.map(detail => <tr
                                key={detail._id}> 
                                <td>{detail.gradeName}</td>  

                                </tr>)
                            } */}
                            {/* <tr>
                                <td>{details.products[0]?.posts[0]?.computed?.highestAvgPriceVarietyGrade?.varietyName}({details.products[0]?.posts[0]?.computed?.highestAvgPriceVarietyGrade?.gradeName})</td>
                                <td className='flex justify-end'>{details.products[0]?.posts[0]?.computed?.highestAvgPriceVarietyGrade?.minPrice}-{details.products[0]?.posts[0]?.computed?.highestAvgPriceVarietyGrade?.maxPrice}</td>
                            </tr> */}


                        </tbody>
                    </table>
                </div>
            </div>



            <div className='flex'>
                <div className='text-[#01A39D] text-center mr-12'>
                    <i class="text-xl fa-brands fa-whatsapp"></i> <br />
                    <p>Share</p>
                </div>
                <div className='text-[#01A39D] text-center mr-12'>
                    <i class="text-xl fa-brands fa-whatsapp"></i> <br />
                    <p>Thanks</p>
                </div>


                <button className="btn btn-md rounded-full bg-[#D2AA1B] border-0 flex items-center">
                    <i class="mr-2 fa-solid fa-paper-plane"></i>
                    Interested
                </button>
            </div>




        </div>
    );
};

export default ProductDetails;