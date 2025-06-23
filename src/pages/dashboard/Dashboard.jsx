
import React, { useState } from 'react'
import "./Dashboard.css"
import right from "./../../assets/right.png"
import person from "./../../assets/person.png"
import box1_img from "./../../assets/box1_img.png"
import Customers_new from "./../../assets/Customers_new.png"

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
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'



const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const SidebarItem = ({ icon, text, open, link }) => (
    
    <Link to={"/dashboard"} className="sidebar-item-link">
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
            <SidebarItem className="box" icon={<IoCubeOutline />} text="Product" open={open} img={right} />
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

        <div className="main3_main4">

          <div className="main3">

            <div className="items">

              <div className="item">
                <h3>
                  Overview
                </h3>
                <p>
                  Monthly Earning
                </p>
              </div>

              <div className="item1">
                <span>
                Quarterly</span> 
                <h4>
                <IoIosArrowDown />
                </h4>
              </div>

            </div>

            <div className="many_boxes">

              <div className="best1"></div>

              <div className="best2"></div>
  
              <div className="best3"></div>

              <div className="best4"></div>
  
              <div className="best5"></div>

              <div className="best6"></div>
  
              <div className="best7"></div>

              <div className="best8"></div>
  
              <div className="best9"></div>

              <div className="best10"></div>
  
              <div className="best11"></div>

              <div className="best12"></div>

            </div>

            <div className="many_txt">

              <div className="text1">
                <p>
                  Jan
                </p>
              </div>

              <div className="text2">
                <p>
                  Feb
                </p>
              </div>

              <div className="text3">
                <p>
                  Mar
                </p>
              </div>

              <div className="text4">
                <p>
                  Apr
                </p>
              </div>

              <div className="text5">
                <p>
                  May
                </p>
              </div>

              <div className="text6">
                <p>
                  Jun
                </p>
              </div>

              <div className="text7">
                <p>
                  Jul
                </p>
              </div>

              <div className="text8">
                <p>
                  Aug
                </p>
              </div>

              <div className="text9">
                <p>
                  Sep
                </p>
              </div>

              <div className="text10">
                <p>
                  Oct
                </p>
              </div>

              <div className="text11">
                <p>
                  Nov
                </p>
              </div>

              <div className="text12">
                <p>
                  Dec
                </p>
              </div>

            </div>

          </div>

          <div className="main4">

            <h2>
              Customers
            </h2>

            <h3>
              Customers that buy products
            </h3>

            <img src={Customers_new} alt="img" />

          </div>

        </div>

      </div>
      
    </div>

  )

}

export default Dashboard
