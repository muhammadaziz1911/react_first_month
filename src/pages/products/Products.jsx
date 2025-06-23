
import React, { useState } from 'react'
import "./Products.css"
import right from "./../../assets/right.png"
import person from "./../../assets/person.png"
import box1_img from "./../../assets/box1_img.png"
import row1_img from "./../../assets/row1_img.png"
import row2_img from "./../../assets/row2_img.png"
import row3_img from "./../../assets/row3_img.png"
import row4_img from "./../../assets/row4_img.png"

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


const Products = () => {
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

          <div className="products">
            
              <div className="line1">

                <h2>
                  Product Sell
                </h2>

                <button type='submit' className='btn1'>
                  <CiSearch />  Search
                </button>

                <button type='submit'>
                  Last 30 days <IoIosArrowDown />
                </button>

              </div>

              <div className="line2">

                <h3>
                  Product Name
                </h3>

                <div className="usb">

                <p >
                  Stock
                </p>

                <p>
                  Price
                </p>

                <p> 
                  Total Sales
                </p>

                </div>

              </div>

              <div className="line3">

                <div className="row">

                  <div className="uz">

                    <img src={row1_img} alt="" />

                  </div>

                  <div className="uz1">

                    <h2>
                      Abstract 3D
                    </h2>

                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>

                  </div>

                </div>

                <div className="row2">

                  <h3>
                    32 in stock
                  </h3>

                  <p>
                    $45.99
                  </p>

                  <h3>
                    20
                  </h3>
                  
                </div>

              </div>

              <div className="line3">

                <div className="row">

                  <div className="uz">

                    <img src={row2_img} alt="" />

                  </div>

                  <div className="uz1">

                    <h2>
                    Sarphens Illustration
                    </h2>

                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>

                  </div>

                </div>

                <div className="row2">

                  <h3>
                    32 in stock
                  </h3>

                  <p>
                    $45.99
                  </p>

                  <h3>
                    20
                  </h3>
                  
                </div>

              </div>

              <div className="line3">

                <div className="row">

                  <div className="uz">

                    <img src={row3_img} alt="" />

                  </div>

                  <div className="uz1">

                    <h2>
                      Landing Page 3D max
                    </h2>

                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>

                  </div>

                </div>

                <div className="row2">

                  <h3>
                    32 in stock
                  </h3>

                  <p>
                    $45.99
                  </p>

                  <h3>
                    20
                  </h3>
                  
                </div>

              </div>

              <div className="line3">

                <div className="row">

                  <div className="uz">

                    <img src={row4_img} alt="" />

                  </div>

                  <div className="uz1">

                    <h2>
                      Collab Illustration
                    </h2>

                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>

                  </div>

                </div>

                <div className="row2">

                  <h3>
                    32 in stock
                  </h3>

                  <p>
                    $45.99
                  </p>

                  <h3>
                    20
                  </h3>
                  
                </div>

              </div>

          </div>
  
        </div>

        
        
      </div>
  
    )
}

export default Products
