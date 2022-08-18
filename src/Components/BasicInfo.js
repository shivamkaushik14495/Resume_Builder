import React from 'react'
import "./Css/BasicInfo.css"
import "../Components/Css/Common.css"

const BasicInfo = () => {
  return (
<div className='BasicInfo'>
    <h3>Basic Information</h3>
    <form className='BasicInform'>
    <div className='firstName basicInputs'>
        <label className='firstName'>First Name
            <input type = "text" placeholder=''/>
        </label>
    </div>
    <div className='lastName basicInputs'>
        <label className='lastName'>Last Name
        <input type = "text" placeholder=''/>
        </label>
    </div>
    <div className='email basicInputs'>
        <label className='email'>Email
        <input type = "text" placeholder=''/>
        </label>
    </div>
    <div className='phoneNumber basicInputs'>
        <label className='phoneNumber'>Phone Number
        <input type = "number" placeholder=''/>
        </label>
    </div>
    </form>
</div>
)
}

export default BasicInfo