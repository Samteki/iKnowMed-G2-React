import React from "react";
import "../styles/Header.css";
import { BsSearch, BsFillCalendar2EventFill,BsFillQuestionCircleFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import {MdSettings} from "react-icons/md"

function getCurrentDate(separator = "/") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

const Header = () => {
  return (
    <div
      className=" h-10 w-screen"
      style={{ backgroundColor: "#3c5c6e", display: "flex" }}
    >
      <p className="ml-8 text-white pt-2 ">
        {" "}
        <b className="text-xl">iKnowMed</b> Generation 2
      </p>
      <div className="p_search">
        <BsSearch size={22} style={{ margin: "8px" }} />
        <input placeholder="Search Patient Name or ID" className="i_search" />
        <IoIosMail size={25} style={{ margin: "8px", marginLeft: "25px" }} />
        <BsFillCalendar2EventFill
          size={18}
          style={{ margin: "8px", marginTop: "10px" }}
        />
      </div>
      <div>
        <p className="today-date">
          Onc Hem of MSH <br /> Suwanee -{getCurrentDate()}
        </p>
      </div>
      <div className="drop">
        <p>Worklist Queues</p>
        <p>Manage</p>
        <p>Admin</p>
        <p>Links</p>
      </div>
      <p className="today-date" style={{ paddingTop: "10px" }}>
        ds super
      </p>
      <MdSettings size={24} style={{ margin: "8px", color:'#ccc', marginLeft:"14px" }}/>
      <BsFillQuestionCircleFill size={22} style={{ margin: "8px", color:'#ccc' }}/>
      <button className='btn'>Log Out</button>
    </div>
  );
};

export default Header;
