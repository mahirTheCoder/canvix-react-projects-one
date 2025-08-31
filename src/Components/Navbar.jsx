import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
const Navbar = () => {
const navItems = [
  {
    navContent: 'Home',
    navLink: '/'
  },
  {
    navContent: 'About',
    navLink: '/',
    dropDown: [
      {
        dropDownContent: 'Our Team',
        dropDownLink: '/'
      },
      {
        dropDownContent: 'Our Story',
        dropDownLink: '/'
      }
    ]
  },
  {
    navContent: 'Contact Us',
    navLink: '/'
  }
]

  return (
    <>
   <nav  id='Navbar'>
    <div className="container">
      <div className="navRow flex justify-between items-center py-8 ">
        <div className="navLogo w-[154px] h-[40px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="navItems flex gap-9  items-center ">
          {
            
            navItems.map((item , k) => (
              <ul key={k}>
                <li className='relative'>
                <Link key={k} className='text-primary text-base font-dm ' to={item.navLink}>{item.navContent}</Link>

                {
                  item.dropDown&&
                 <div className="dropdown-manu absolute w-[250px] h-auto bg-white rounded-[7px] py-3 pl-4 top-8">
                  <ul>
                    <li>
                      <Link to={'/'}>Phone</Link>
                    </li>
                  </ul>
                 </div>

                }
                </li>
              </ul>

            ))
          }
        </div>
        <div className="navButton  flex justify-center items-center ">
          <button className=' w-[140px] h-[47px] rounded-[23px] bg-[#FBFBFB] text-secondary text-lg normal font-dm hover:bg-black hover:text-primary transition duration-700 inline-block' >Get in touch</button>
        </div>
      </div>
    </div>
   </nav>
    </>
  )
}

export default Navbar