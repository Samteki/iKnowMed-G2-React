import React from 'react'

export default function PatientList() {
    const data = [{
        name:"ss",
        age:21
    },
    {
        name:"na",
        age:22
    },
    {
        name:"pd",
        age:23
    },
    {
        name:"br",
        age:24
    }]
   
  return (
    <div>
        <table className='patient'>
            <tbody>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
                {data.map((item,key)=>(
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
