"use client";

import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./header.css";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const NavLists = ({ className }) => {
    return (
      <>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className={`relative py-7 text-sm font-medium cursor-pointer transition-all duration-300 hover:text-yellow-500 md:text-lg ${className}`}
        >
          <a href="#footer">Contact</a>
        </li>
      </>
    );
  };

  const cssStyle = {
    blur: {
      position: "absolute",
      height: "100%",
      left: 0,
      width: "100%",
      background: "#ffffff42",
      filter: "blur(42px)",
      zIndex: "-1",
      backdropFilter: "blur(2px)",
    },
  };

  // window onLoad Entry
  const navBarFix = useRef();
  const header_section = useRef();

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (navBarFix.current && header_section.current) {
        navBarFix.current.style.top = "10px";
        navBarFix.current.style.opacity = "1";
        header_section.current.style.top = "0";
        header_section.current.style.opacity = "1";
      }
    });

    // header NavBar onScroll
    window.addEventListener("scroll", () => {
      const scrollValue = window.scrollY;
      if (scrollValue >= 82) {
        if (navBarFix.current) {
          navBarFix.current.style.top = "20px";
          navBarFix.current.style.position = "sticky";
        }
      } else {
        if (navBarFix.current) {
          navBarFix.current.style.top = "5px";
          navBarFix.current.style.position = null;
        }
      }
    });
  }, []);

  return (
    <>
      <div
        className="m-auto transition-all duration-700 relative top-0 z-20"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-center items-center px-6 py-4 mt-5 border border-gray-500 p-4 rounded-full w-fit m-auto overflow-hidden md:w-fit lg:py-0.5"
        >
          <div className={""} style={cssStyle.blur}></div>
          <div className="flex justify-center items-center w-fit gap-6 min-[375px]:gap-14 min-[440px]:gap-22 min-[550px]:gap-35 min-[695px]:gap-45 md:gap-60 lg:gap-80 xl:gap-115 2xl:gap-125">
            <div
              id="logo"
              className="text-md font-medium w-42 md:text-lg cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span className="flex items-center">
                <img
                  src="./images/skills/js.png"
                  alt=""
                  className="h-4 w-4 mr-2"
                  loading="lazy"
                />
                Rakib Developer
              </span>
            </div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsNavOpen(false);
              }}
            >
              {/* large screen */}
              <div
                id="menu"
                className="hidden justify-between gap-10 items-center w-full lg:flex"
              >
                <ul className="flex justify-center items-center gap-7">
                  <NavLists className={"hoverUnderLine"} />
                  <div id="contact" className="flex gap-2">
                    <a
                      target="_blank"
                      href="https://cal.com/md-rejoanul-hasan-rakib/30min"
                      className="text-lg py-2 px-4 bg-yellow-400 text-black font-medium rounded-full border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
                    >
                      Book A Call
                    </a>
                  </div>
                </ul>
              </div>
            </OutsideClickHandler>
            <div className="lg:hidden relative flex justify-center items-center gap-5">
              {!isNavOpen ? (
                <RiMenu3Fill
                  className="text-3xl"
                  onClick={() => setIsNavOpen(true)}
                />
              ) : (
                <RiCloseFill
                  className="text-3xl"
                  onClick={() => setIsNavOpen(false)}
                />
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* small screen */}
      <div
        className={` fixed transition-all duration-300 flex flex-col w-full pb-10 h-full pl-5 md:px-10 pt-5 gap-10 overflow-y-auto lg:hidden z-50 ${
          isNavOpen ? "top-21" : "-top-[200%]"
        }`}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

        <ul className="flex flex-col items-start leading-6 mr-4 overflow-x-auto w-full mb-10">
          <NavLists className={"!py-2 !text-lg text-gray-700 !font-bold"} />
          <a
            target="_blank"
            href="https://cal.com/md-rejoanul-hasan-rakib/30min"
            className="text-sm py-2 px-4 bg-yellow-400 text-black font-medium rounded-full border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-white mt-4"
          >
            Book A Call
          </a>
        </ul>
      </div>

      <header
        id="header-section"
        ref={header_section}
        className="relative mt-[50px] max-w-7xl mx-auto pt-0 w-full overflow-hidden"
      >
        <div className="p-4 w-full py-6 flex justify-center flex-wrap flex-col m-auto gap-20 items-center md:gap-20 md:flex-row md:w-full">
          <div
            id="header-img"
            className="relative flex justify-center items-center h-[270px] w-[270px] rounded-full border border-gray-500/20 bg-white shadow overflow-hidden md:w-[28.125rem] md:h-[28.125rem] "
            style={{
              boxShadow: "rgba(205, 205, 205, 0.52) 2px 2px 12px inset",
            }}
          >
            <img
              id="profile"
              src="./images/profile.png"
              alt=""
              className="h-[270px] mask-image-gradient md:h-[500px]"
              loading="lazy"
            />
          </div>

          <div id="header-para" className="w-full relative lg:w-[43%]">
            <h1
              className="text-4xl mb-0 mask-image-gradient leading-8 md:leading-16 md:text-5xl"
              style={{
                background: "var(--header-gradient)",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "500",
              }}
            >
              Hi, It's Rakib
            </h1>
            <h2 className="text-xl relative leading-12 md:text-3xl">
              {/* I'm a <span className="text-yellow-500">Website Developer</span> */}
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once,initially
                  "Website Developer",
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Website Designer",
                  2500,
                  "Javascript Developer",
                  2000,
                  "React Developer",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: "inline-block",
                }}
                className={"text-yellow-500"}
                repeat={Infinity}
              />
            </h2>
            <p
              className="w-full text-md text-transparent bg-clip-text"
              style={{
                background: "var(--header-para-gradient)",
                backgroundClip: "text",
              }}
            >
              A website developer who loves to build websites. I specialize in
              creating responsive and user-friendly websites tailored to meet
              your unique needs. My services include website design, front-end
              and back-end development, and ongoing maintenance to ensure
              optimal performance.
            </p>
            <div id="contact" className="mt-10 space-x-2">
              <a
                href="#footer"
                className="bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full border-3 border-yellow-300 shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white"
              >
                Hire Me
              </a>
              <a
                target="_blank"
                href="https://cal.com/md-rejoanul-hasan-rakib/30min"
                className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full border-3 border-yellow-300 shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:text-white"
              >
                Book A Call
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
