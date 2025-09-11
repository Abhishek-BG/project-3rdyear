import { useEffect, useState } from "react";

import { Link,useNavigate } from "react-router-dom";
export default function Header({ name, age, fun }) {
  const [isLogin,setLogin]= useState(false);
  const navigate = useNavigate();
  const token= document.cookie.split("=")[1];
  useEffect(()=>{
      if(!token || token==undefined){
    navigate("/");
  }else{
    setLogin(true);
  }
  },[])
  return (
    <div className=" bg-gray-900 px-3 py-1">
      <div className="flex items-center justify-between">
        {/* Logo Col */}
        <div className="">
          <h1 className="text-red-500 text-[35px] font-bold ">Netflix</h1>
        </div>
        {/* Language Col */}
        <div >
          <select  className="text-white border border-white text-sm
            rounded-sm flex-right px-2 mr-3">
            <option>English</option>
            <option>Hindi</option>
          </select>
          {!isLogin ?(
           <Link to="/">
              <button className="bg-red-500 text-white rounded-sm px-3">
                Sign In
              </button>
          </Link>
          ):(
           <Link to="/dashboard">
              <button className="bg-red-500 text-white rounded-sm px-3 ml-3">
                Dashboard
              </button>
          </Link>
          )}
        </div>

      </div>
    </div>
  );
}
