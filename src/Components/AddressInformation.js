import React from 'react'
import "../Components/Css/Common.css"
import "../Components/Css/AddressInformation.css"

const AddressInformation = () => {
  return (
    <div className='Address_Information'>
        <h3>Address Information</h3>
    <form className='Addres_Inform'>
    <div className='street Addres_Inputs' id = "Street-Address">
        <label className='firstName'>Street Address
            <textarea type = "text" placeholder='' id='Street-Address-input'/>
        </label>
    </div>
    <div className='city Addres_Inputs'>
        <label className='lastName'>City
        <input type = "text" placeholder=''/>
        </label>
    </div>
    <div className='state Addres_Inputs'>
        <label className='email'>State
        <input type = "text" placeholder=''/>
        </label>
    </div>
    <div className='country Addres_Inputs'>
        <label className='phoneNumber'>Country
        <input type = "number" placeholder=''/>
        </label>
    </div>
    <div className='zipCode Addres_Inputs'>
        <label className='phoneNumber'>Zip Code / Pin Code
        <input type = "number" placeholder=''/>
        </label>
    </div>
    </form>

    </div>
    
  )
}

export default AddressInformation