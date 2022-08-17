import React from 'react'
import "./Css/BasicInfo.css"

const BasicInfo = () => {
  return (
<div className='BasicInfo'>
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