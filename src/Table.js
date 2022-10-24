import React from 'react'

const Table = ({data}) => {
  return (
    <table className='table'>
        <tbody>
            <tr className='table-two'>
                <th>name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {data.map((item) =>(
            <tr key={item.id} className='tableline'>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
             </tr> 

            ))}
            
        </tbody>
    </table>
  )
}

export default Table