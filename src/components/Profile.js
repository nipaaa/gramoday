import React from 'react';
import useGramoday from '../hooks/useGramoday';

const Profile = () => {
    const [details, setDetails] = useGramoday();
    return (
        <div>
            <div className='py-2 flex justify-between items-center bg-gradient-to-b from-[#6202ee] to-[rgba(98,2,238,.5)] text-white'>
                <h1></h1>
                <h1 className='text-3xl'>Profile</h1>
                <h1 className='text-4xl pr-2'> <i class="fa-solid fa-language"></i></h1>
            </div>

            {/* main profile */}

            <div className='w-3/4 mx-auto'>

                <div className="flex justify-end mt-2">
                    <button className="btn btn-xs rounded-full bg-[#01A39D] border-0 text-white">
                    <i class="mr-2 fa-brands fa-whatsapp"></i>
                        Share
                    </button>
                </div>
                <div className="flex">
                    <div className="avatar my-auto">
                        <div className="w-24 h-24 rounded-full ">
                            <img src='img/profile.svg' alt="" />
                        </div>
                    </div>
                    <div className='ml-8'>
                        <h1 className="text-2xl font-bold">{details.name}</h1>
                        <p className="text-xl my-2">
                            {details.loclevel3Name},{details.loclevel2Name}
                        </p>
                        <p>
                            <i>Speaks English</i>
                        </p>
                        <div className="mt-3">
                            <button className="btn btn-sm bg-[#01A39D] border-0 rounded-full">
                                <i class="mr-2 fa-solid fa-user-plus"></i>
                                Connect
                            </button>
                            <button className="btn btn-sm btn-outline text-[#01A39D] rounded-full mx-6">
                            <i class="mr-2 fa-solid fa-phone"></i>
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;