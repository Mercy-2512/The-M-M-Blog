import React from "react";
import MainCard from "./MainCard";
import { Link } from "react-router-dom";
const imgUrl = "./src/assets/images/Logo.png";

const Header = () => {
  const links = [
    {
      title:"Home",
      path :"/"
    },
    {
      title:"Content",
      path :"/content"
    },
    {
      title:"Your Interests",
      path :"/your_interests"
    },
    {
      title:"Sign In",
      path :"/sign"
    },
  ]
  return (
    <>
    <div className="mb-10 text-xl font-dm_sans font-bold">
      <div className="flex justify-between items-center">
      <Link to='/' className="block">
        <img src={imgUrl} alt="Logo" className="w-32 h-32" />
      </Link>
      <div className="flex gap-10">
        {
          links.map((link,index)=>(
            <Link key={index} to={link.path}>
            <p className="text-lg font-medium">{link.title}</p>
            </Link>
          ))
        }
      </div>
      </div>
        <div className="bg-black h-[1px] w-full"></div>
    </div>
      </>
  );
};

export default Header;
