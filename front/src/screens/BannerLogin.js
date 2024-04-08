import React, { useEffect, useState } from 'react';
import LoginScreenComponent from "../components/loginscreen/LoginScreenComponent";
import img from "../language-student-online.jpg"

const backButtonSvg =
  <svg width="48" fill="none" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect className="dark:stroke-white stroke-black" x="0.5" y="0.5" width="47" height="47" rx="23.5" />
    <g clip-path="url(#clip0_1606_20)">
      <path
        className="dark:fill-white fill-black"
        d="M25.2422 31.0977L18.8086 24.3828C18.6328 24.1719 18.5625 23.9609 18.5625 23.75C18.5625 23.5742 18.6328 23.3633 18.7734 23.1875L25.207 16.4727C25.5234 16.1211 26.0859 16.1211 26.4023 16.4375C26.7539 16.7539 26.7539 17.2812 26.4375 17.6328L20.5664 23.75L26.4727 29.9375C26.7891 30.2539 26.7891 30.8164 26.4375 31.1328C26.1211 31.4492 25.5586 31.4492 25.2422 31.0977Z"
      />
    </g>
    <defs >
      <clipPath className="dark:fill-white fill-white" id="clip0_1606_20">
        <rect x="10" y="3.5" width="28" height="41" rx="14" />
      </clipPath>
    </defs>
  </svg>

const moonSvg =
  <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z" fill="white" /></svg>

const sunSvg =
  <svg class="feather feather-sun" width="48" height="48" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" /><line x1="12" x2="12" y1="1" y2="3" /><line x1="12" x2="12" y1="21" y2="23" /><line x1="4.22" x2="5.64" y1="4.22" y2="5.64" /><line x1="18.36" x2="19.78" y1="18.36" y2="19.78" /><line x1="1" x2="3" y1="12" y2="12" /><line x1="21" x2="23" y1="12" y2="12" /><line x1="4.22" x2="5.64" y1="19.78" y2="18.36" /><line x1="18.36" x2="19.78" y1="5.64" y2="4.22" /></svg>


function BannerLogin() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleBanner = () => {
    setIsBannerOpen(!isBannerOpen);
  };

  return (
    <div className="flex justify-center h-screen dark:bg-dark ">
      <div
        className={`${isBannerOpen ? "w-[1228px] grow " : "w-0 grow-0"} lg:block md:block hidden duration-1000 h-full bg-cover`}
        style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%), url(${img})` }}
      >
      </div>
      <div className="my-6 w-[692px] font-inter dark:text-white overflow-auto">
        <div className="px-6 flex flex-row-reverse justify-between">
          <button className="justify-self-end" onClick={toggleDarkMode}>
            {isDarkMode ? moonSvg : sunSvg}
          </button>
          <button className={isBannerOpen ? "transition-transform rotate-180 duration-500 hidden lg:block md:block" : "transition-transform hidden lg:block md:block duration-500"} onClick={toggleBanner}>
            {backButtonSvg}
          </button>
        </div>
        <LoginScreenComponent />
      </div>
    </div>
  );
}

export default BannerLogin;
