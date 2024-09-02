import React from 'react';
import { IoMenu } from "react-icons/io5";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaPlayCircle, FaEye, FaHeart } from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions, MdTrendingUp } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";
import './slider.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className='menu'><IoMenu /></li>
        <li><FaHome /></li>
        <li><SiYoutubeshorts /></li>
        <li><MdSubscriptions /></li>
        <li><MdTrendingUp /></li> 
        <li><TbHistoryToggle /></li>
        <li><FaPlayCircle /></li>
        <li><FaEye /></li>
        <li><FaHeart /></li>
        <li><FaUser /></li>
        <li><FaCog /></li>
        <li><FaSignOutAlt /></li>
      </ul>
    </div>
  );
}

export default Sidebar;
