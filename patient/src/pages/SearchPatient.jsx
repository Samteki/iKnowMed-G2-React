import React from 'react'
import '../styles/search.css';
import { MdRefresh, MdClose } from 'react-icons/md';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { RiFoldersLine } from 'react-icons/ri';
import Bar from '../components/Bar';

const SearchPatient = () => {
  return (
    <div className='search-head'>
      <Bar />
      <div className='options'>
        <button className="but">+ New Patient</button>
        <div style={{ display: 'flex' }}>
          <p className='status'>Patient Name or ID:</p>
          <input className='input_search' />
        </div>
        <div style={{ display: 'flex' }}>
          <p className='status'>Patient Date of Birth:</p>
          <input className='input_search' />
        </div>
        <div style={{ display: 'flex' }}>
          <p className='status'>Status:</p>
          <input className='input_search' />
        </div>
      </div>
      <div className='table_main'>
        <table className='table_head'>
          <thead>
            <tr className='t_data'>
              <td className='link'>Patient Name-DOB-MRN</td>
              <td>Age/Gender</td>
              <td>Attending Provider(s)</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SearchPatient
