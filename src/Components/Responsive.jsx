import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";

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

]
  return (
    <>
      <nav id="Responsive" className="lg:hidden px-2 py-3">
        <div className="container">
          <div className="responsiveRow flex items-center justify-between">
            <div className="reslogo ">
              <Link to={"/"} className="logo inline-block w-28">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <button className="text-white text-2xl">
              <FaBarsStaggered />
            </button>
          </div>
        </div>

        <div className="custom w-50 h-full bg-primary absolute top-0 right-0">
          <div className="navitems flex flex-col gap-3  items-center justify-center h-[500px]">
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
