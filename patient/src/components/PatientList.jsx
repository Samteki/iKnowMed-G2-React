import React from 'react'

export default function PatientList(props) {

  return (
    <div>
        <table className='patient'>
            <tbody>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
                {props?.hello?.data.map((item,key)=>(
                    <tr key={key}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}
