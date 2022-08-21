import React, { useState } from 'react'
import "./Css/BasicInfo.css"
import "../Components/Css/Common.css"


// Usestate Components


function FirstName(){
    // let [Name , Update] = useState("");
    // return Name = Update;
}

// Usestate Components End


const BasicInfo = () => {
  return (
<div className='BasicInfo'>

    {/* Heading of Basic Input */}
    
    <h3>Basic Information</h3>

    {/* Form Started */}

    <form className='BasicInfoform'>

    {/* First Name */}
    
    <div className='firstName basicInputs'>
        <label className='firstName'>First Name
            <input type = "text" onChange={FirstName}/>
        </label>
    </div>

    {/* Last Name */}

    <div className='lastName basicInputs'>
        <label className='lastName'>Last Name
            <input type = "text"/>
        </label>
    </div>

    {/* Email */}

    <div className='email basicInputs'>
        <label className='email'>Email
            <input type = "text"/>
        </label>
    </div>

    {/* PhoneNumber */}

    <div className='phoneNumber basicInputs'>
        <label className='phoneNumber'>Phone Number
            <input type = "number"/>
        </label>
    </div>

    {/* Form End */}

    </form>
</div>
)
}

export default BasicInfo