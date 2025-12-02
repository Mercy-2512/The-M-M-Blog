import React from "react";
import SecondaryCards from "./SecondaryCards";
import {Link} from "react-router-dom";
 function MainCard() {
    return (
        <>
        <Link to="/content" className="block">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-md mx-auto flex overflow-hidden ">
                {/* Image Section */}
                <img
                    src="./src/assets/images/primary2.jpg"
                    alt="Christmas"
                    className="w-3/5 object-cover"
                />

                {/* Text Section */}
                <div className="flex flex-col justify-center p-10 w-15 bg-black">
                    <h2 className="text-5xl font-bold font-dm_sans text-white mb-3">
                        Christmas 2024 begins its charm
                    </h2>
                    <p className="text-lg font-gilda font-medium text-white">
                    Discover the heartwarming stories behind these traditions and how they have evolved over the years. Let’s keep the magic of Christmas alive by embracing old customs and creating new ones!
                    </p>
                </div>
            </div>
            </Link>
            <SecondaryCards></SecondaryCards>
        </>
    );
};
export default MainCard
