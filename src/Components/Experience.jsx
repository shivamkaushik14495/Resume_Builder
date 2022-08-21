import React from 'react'
import "../Components/Css/Common.css"
import "../Components/Css/Experience.css"

const Experience = () => {
  return (
    <div className='Experience'>
     <h3>Experience</h3>
    <form className='Experience_Inform'>

    <div className='street Experience_Inputs' id = "Organisation-input">
        <label className='Organisation'>Organisation Name
            <input type = "text" placeholder='' id='Organisation-input'/>
        </label>
    </div>
    <div className='city Experience_Inputs'>
        <label className='from'>From
        <input type = "date" placeholder=''/>
        </label>
    </div>
    <div className='state Experience_Inputs'>
        <label className='to'>To
        <input type = "date" placeholder=''/>
        </label>
        <label id = "Currently-working">
        <input type="checkbox" Value = "Currenctly working here" id='Currently-working-input'/>
        Currently Working
        </label>
    </div>
    <div className='street Experience_Inputs responcibilities '>
        <label className='Organisation'>Responcibilities
            <textarea type = "text" placeholder='' className='responcibilities'/>
        </label>
    </div>
    </form>
    </div>
  )
}

export default Experience