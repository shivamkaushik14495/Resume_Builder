import React from 'react'
import { useState } from 'react'

// First Name

function Namehook(){

    const [name, Change] = useState();



}





const BasicInfo = () => {
  return (
<div className='BasicInfo'>
<form action='Get'>
    <h1>Basic Information</h1>
    <label>First Name</label>
        <input type='text' placeholder='Type here'/>
    <label>Last Name</label>
        <input type='text' placeholder='Type here'/>
    <label>Email</label>
        <input type='text' placeholder='Type here'/>
    <label>Phone No.</label>
        <input type='number' maxLength='10' placeholder='Type here'/>
    <label>Address</label>
        <input type='text'placeholder='Type here'/>
</form>
</div>
)
}

export default BasicInfo