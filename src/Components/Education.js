import React from 'react'
import "../Components/Css/Common.css"
import "../Components/Css/Experience.css"

const Experience = () => {
  return (
    <div className='Experience'>
     <h3>Education</h3>
    <form className='Experience_Inform'>

    <div className='street Experience_Inputs' id = "Organisation-input">
        <label className='Organisation'>School Name
            <input type = "text" placeholder='' id='Organisation-input'/>
        </label>
    </div>

    <div className='city Experience_Inputs Degree'>
        <label className='from'>Degree
        <input type = "text" placeholder=''/>
        </label>
    </div>

    <div className='city Experience_Inputs'>
        <label className='from'>Educational Board
        <input type = "text" placeholder=''/>
        </label>
    </div>

    <div className='city Experience_Inputs'>
        <label className='from'>Place
        <input type = "text" placeholder=''/>
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
        <label className='Organisation'>Skills
        <textarea type = "text" placeholder='' className='responcibilities'/>
        </label>
    </div>
    <div className='street Experience_Inputs responcibilities '>
        <label className='Organisation'>Extra Details
        <textarea type = "text" placeholder='' className='responcibilities'/>
        </label>
    </div>
    </form>
    </div>
  )
}

export default Experience