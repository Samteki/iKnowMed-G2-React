import React from 'react'
import '../styles/search.css';
import {MdRefresh, MdClose} from 'react-icons/md';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import {RiFoldersLine} from 'react-icons/ri';

const Bar = () => {
  return (
    <div className='bar-head'>
      <p>Patient Search</p>
      <div className='icon'>
      <MdRefresh/>
         <BsFillArrowLeftSquareFill/>
         <RiFoldersLine/>
         <MdClose/>
      </div>
        
    </div>
  )
}

export default Bar
