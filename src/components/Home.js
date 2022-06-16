import React from 'react';
import Profile from './Profile'
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Profile></Profile>

            <div>
                <div className="lg:w-3/5 mx-auto mt-4 flex justify-evenly">
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-4 w-full text-center font-bold border-[#01A39D]"
                                : "w-full text-center font-bold"
                        }
                        to="/"
                    >
                        BUSINESS
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-4 w-full text-center border-green-700 font-bold"
                                : "w-full text-center font-bold"
                        }
                        to="/review"
                    >
                        REVIEW
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>


    );
};

export default Home;