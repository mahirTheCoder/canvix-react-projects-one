import React from 'react'
import CommonHead from './CommonHead'
import SingleserviceContent from './SingleserviceContent'
import { FaPencil } from "react-icons/fa6";
import { RiQuillPenAiFill } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiSolidContact } from "react-icons/bi";
import { LiaGemSolid } from "react-icons/lia";
import { RiContactsBook3Fill } from "react-icons/ri";
import { SiArtstation } from "react-icons/si";



const Service = () => {
  return (
    <>
    <div className="container mt-26 px-3 +">
      <CommonHead service1={'Our Services' } service2={'High-impact services for your business'} />

      <div className='flex flex-wrap items-center gap:5 lg:gap-[66px] mt-[91px] pb-[93px] '>
        <SingleserviceContent icon={<FaPencil className='group-hover:text-secondary'/>}   marketting={'Content Marketing'} content={'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'} />
        <SingleserviceContent icon={< RiQuillPenAiFill  className='group-hover:text-secondary'/>}   marketting={'Graphic Design '} content={'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'} />
        <SingleserviceContent icon={<HiOutlineSpeakerphone className='group-hover:text-secondary'/>}   marketting={'Digital Marketing '} content={'Elevate your brands online presence with our data-driven digital marketing strategie From SEO and content marketing'} />
        <SingleserviceContent icon={<SiArtstation className='group-hover:text-secondary'/>}   marketting={'Web Design'} content={'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.'} />
        <SingleserviceContent icon={<RiContactsBook3Fill className='group-hover:text-secondary'/>}   marketting={'IT Consulting'} content={'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'} />
        <SingleserviceContent icon={<LiaGemSolid className='group-hover:text-secondary'/>}   marketting={'Brand Identity '} content={'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'} />
      </div>
    </div>
    
    </>
  )
}

export default Service