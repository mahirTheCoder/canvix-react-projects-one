import React, { use, useState } from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedAirFlows } from "react-icons/gi";

const Responsive = () => {

  const navItems = [
  {
    navContent: 'Home',
    navLink: '/',

  },
  {
    navContent: 'About',
    navLink: '/',

  },
  {
    navContent: 'Contact Us',
    navLink: '/'
  }

];

const [shownav, setShowNav] = useState (false);

  return (
    <>
      <nav id="Responsive" className="lg:hidden px-2 py-3">
        <div className="container">
          <div onClick={()=> setShowNav(!shownav)} className="responsiveRow flex items-center justify-between">
            <div className="reslogo ">
              <Link to={"/"} className="logo inline-block w-28">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <button onClick={()=>setShowNav(!shownav)} className="text-white text-2xl">
              <FaBarsStaggered />
            </button>
          </div>
        </div>

  

        <div className={`w-[200px] h-screen bg-white absolute top-0 ${shownav? 'right-0': 'right-[-100%]'}  flex justify-center items-center duration-700`}>
          <div className="navitems flex flex-col gap-3">

            <button onClick={()=> setShowNav(!shownav)}>
            <GiCrossedAirFlows className="absolute top-5 right-7 text-lg text-[#000]" />
            </button>

            {
              navItems.map((item, k)=>(
            <ul key={k}>
              <li>
                <Link className="text-lg font-dm text-black" to={item.navLink}>{item.navContent }</Link>
              </li>
            </ul>

              ))
            }
            <Link className=' w-[130px] h-[40px] rounded-[10px] bg-black text-white text-sm normal font-dm flex justify-center items-center' >Get in touch</Link>
          </div>
        </div>


      </nav>
    </>
  );
};

export default Responsive;
