import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(moment().format());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format("dddd, MMMM D YYYY, h:mm:ss a"));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="w-2/3 flex flex-col items-center mx-auto">
      <img src={logo} alt="" />
      <h2>Journalism Without Fear or Favour</h2>
      <p>{currentTime}</p>
      <div className="navbar bg-base-300">
        <a className="btn btn-error">daisyUI</a>
        <Marquee>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
