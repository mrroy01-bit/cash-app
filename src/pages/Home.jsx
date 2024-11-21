import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../Components/Header';
import Background from '../assets/video/back-vid.mp4';
import Scam from '../assets/img/home2022.png';
import Navimg from '../assets/img/send_desktop.png';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideC4, setHideC4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const page1Element = document.getElementById('page1');
      if (page1Element) {
        const bounding = page1Element.getBoundingClientRect();
        setHideC4(bounding.top < window.innerHeight && bounding.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollPage2 = () => {
    gsap.to(window, {
      duration: 2.5,
      scrollTo: {
        y: "#page2",
        autoKill: true,
      },
      ease: "power2.inOut",
    });
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id='home'>
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={handleMenuToggle}
        />
      )}

      <div id='page1' className={`page ${menuOpen ? 'page-disabled' : ''}`}>
        <video src={Background} autoPlay loop muted className='vid fixed w-screen '></video>
        <div className='header-container sticky'>
          <Header menuOpen={menuOpen} onMenuToggle={handleMenuToggle} />
          <div className='items-center text-white flex justify-center mt-[2vh] text-7xl font-bold uppercase'>
            <h1 className='text-8xl'> <span>Do More</span> <br />
              <span className='ml-8'> with Your</span> <br />
              <span className='flex'> Money
                <span className='flex w-[190px] border rounded-xl items-center ml-5 '>
                  <h3 className='text-xs font-bold pl-3 '>Download <br /> Cash App</h3>
                  <img className='w-20 h-20 ml-3  rounded-[8px]' src={Scam} alt="" />
                </span>
              </span>
            </h1>
          </div>
          <div className='flex items-center justify-center mt-[30px]'>
            <div>
              <h2 className='text-white text-2xl text-center font-semibold'>
                Send and spend, bank*, and buy stocks or <br /> bitcoin**
              </h2>
            </div>
          </div>
          <span className='flex items-center justify-center text-center text-white mt-[2vh] text-xs'>
            Cash App is a financial services platform, not a bank. Banking services are provided by Cash <br /> App’s bank partner(s). Prepaid debit cards issued by Sutton Bank, Member FDIC. Brokerage <br /> services by Cash App Investing LLC, member FINRA/SIPC, subsidiary of Block, Inc. Bitcoin <br />services provided by Block, Inc, formerly known as Square, Inc.
          </span>
        </div>

        <div className='absolute bottom-0 w-full flex justify-center'>
          <div className='h-5 w-5 rounded-full  flex items-center justify-center hover:cursor-pointer' onClick={scrollPage2}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div id='page2' className='page  relative '>
        <div className='flex bg-img'>
          <div className=''>
            <h1 className='text-white text-center text-8xl leading-none	 font-semibold ml-[20vh] mt-[20vh] '>
              <span className='flex'> PAY </span>
              <span className='flex '> ANYONE </span>
              <span className='flex '>INSTANTLY</span>
            </h1>
            <div className=' ml-[19vh] '>
              <div className='flex'>
                <a href="#" className="bg-white text-[#5300E8] font-semibold pt-3 pb-3 px-4 rounded-full">LEAR MORE</a> <br />
                <span className='text-white text-base ml-5 pt-1'>It’s free to send and receive money,<br /> stocks, or bitcoin** within Cash App.</span>
              </div>
              <div className=' text-slate-200 mt-[2vh] text-xs '>Cash App is a financial services platform, not a bank. Banking services are provided by Cash App’s bank <br /> partner(s).
               Prepaid debit cards issued by Sutton Bank, Member FDIC. Brokerage services by Cash App  Investing LLC,<br />
                member FINRA/SIPC, subsidiary of Block, Inc. Bitcoin services provided by Block, Inc,<br />
                 formerly known as Square, Inc.</div>
            </div>
            <div className='phone-img'>

            <img src={Navimg} alt=""  />
            </div>

          </div>
         
        </div>
        <div>
        <div className={`c-4 ${hideC4 ? 'hidden' : ''}  absolute bottom-0 right-0 w-fit flex items-end justify-end`}>
          <div className='border border-white bg-white '>

          <img src={Scam} className='w-32 h-32' alt="" />
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Home;

