import React from "react";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../images/Woxsen.png'; // Fixed import syntax

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login/adminLogin");
  };

  return (
    <div className="flex-[0.05] flex justify-between items-center mx-5 my-2">
      <div className="flex items-center space-x-2">
        <img
          src={logo} // Fixed template literal
          alt="Woxsen University Logo"
          className="h-7"
        />
        <h1 className="font-bold text-emerald-600 text-sm">CMS</h1> {/* Changed from blue to emerald */}
      </div>
      
      <h1 className="font-semibold text-gray-800">Welcome</h1> {/* Darker text for better contrast */}
      
      <div className="flex items-center space-x-3">
        <Avatar
          src={user?.result?.avatar}
          alt={user?.result?.name?.charAt(0) || 'U'}
          sx={{ 
            width: 24, 
            height: 24,
            border: '2px solid #10b981', // Emerald border instead of blue
            backgroundColor: '#ecfdf5' // Light emerald background
          }}
        />
        <h1 className="text-gray-700">{user?.result?.name?.split(" ")[0]}</h1> {/* Added safe navigation */}
        <LogoutIcon
          onClick={logout}
          className="cursor-pointer text-gray-600 hover:text-rose-500 hover:scale-110 transition-all duration-200"
          fontSize="small"
        />
      </div>
    </div>
  );
};

export default Header;