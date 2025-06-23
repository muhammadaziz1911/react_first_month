import React, { useState } from 'react'
import "./Banner.css"
import right from "./../../assets/right.png"
import person from "./../../assets/person.png"
import box1_img from "./../../assets/box1_img.png"

import wallet2_img from "./../../assets/wallet2_img.png"
import lock2_img from "./../../assets/lock2_img.png"


import { FaKey } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineLiveHelp } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { Link } from 'react-router-dom'


const Banner = () => {
  
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const SidebarItem = ({ icon, text, open, link }) => (
    
    <Link to={link} className="sidebar-item-link">
      <div className="sidebar_items">
        <div className="icon">{icon}</div>
        {open && <span className="text">{text}</span>}
      </div>
    </Link>

  );


  
  
  
  return (

    <div className='container'>

      <div className="side_bar">

        <div className={`sidebar ${open ? "open" : "closed"}`}>

          <div className="logo" onClick={toggleSidebar}>
            {open ? "Dashboard" : "D"}
          </div>

          <div className="menu">
            <SidebarItem className="box" icon={<FaKey />} text="Dashboard" open={open} img={right} link={"/dashboard"} />
            <SidebarItem className="box" icon={<IoCubeOutline />} text="Product" open={open} img={right} link={"/products"} />
            <SidebarItem className="box" icon={<FaUserCircle />} text="Customers" open={open} img={right} />
            <SidebarItem className="box" icon={<IoWallet />} text="Income" open={open} img={right} />
            <SidebarItem className="box" icon={<RiDiscountPercentLine />} text="Promote" open={open} img={right} />
            <SidebarItem className="box" icon={<MdOutlineLiveHelp />} text="Help" open={open} img={right} />
          </div>

          <div className="items_menu">

            {open ? (

              <div className="mx_m">

                <h2>
                  Upgrade to  PRO to get access all Features!
                </h2>

                <button type='submit'>
                  Get Pro Now!
                </button>

              </div>

            ) : " "}

          </div>

          <div className="support">
            {open ? (
              <div className="user_info">
              <img src={person} alt="person" className="avatar" />
                <div className="user_texts">
                  <p className="username"><b>Evano</b></p>
                  <p className="role">Project Manager</p>
                </div>
              </div>
              ) : (
            <img src={person} alt="person" className="avatar" />
            )}
          </div>

          
        
        </div>

      </div>

      <div className="main">

        <div className="header">

            <h2>
              Hello Evano 👋🏼,
            </h2>

            <button type='submit'>
              <CiSearch />  Search
            </button>

        </div>

        <div className="main2">

          <div className="boxes">

            <div className="box">

              <div className="img">
                <img src={box1_img} alt="img" />
              </div>

              <div className="text">
                <h3>
                  Earning
                </h3>
                <h2>
                  $198k
                </h2>
                <p>
                <span><FaArrowUp /> 37.8%</span> this month
                </p>
              </div>

            </div>

            <div className="box">

            <div className="img">
                <img src={wallet2_img} alt="img" />
              </div>

              <div className="text">
                <h3>
                  Balance
                </h3>
                <h2>
                  $2.4k
                </h2>
                <p>
                <span><FaArrowUp /> 2%</span> this month
                </p>
              </div>

            </div>
            
            <div className="box">

            <div className="img">
                <img src={lock2_img} alt="img" />
              </div>

              <div className="text">
                <h3>
                  Total Sales
                </h3>
                <h2>
                  $89k
                </h2>
                <p>
                <span><FaArrowUp /> 11%</span> this month
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
      
    </div>

  )
}

export default Banner
