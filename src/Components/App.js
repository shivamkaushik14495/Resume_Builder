import React from 'react'
import BasicInfo from './BasicInfo'
import "../Components/Css/App.css"
import Header from './Header'
import AddressInformation from './AddressInformation'
import Experience from './Experience'

const App = () => {
  return (
    <div id="builder_layot">
      <Header/>
      <BasicInfo/>
      <AddressInformation/>
      <Experience/>
    </div>
  )
}

export default App