import React from 'react'
import BasicInfo from './BasicInfo'
import "../Components/Css/App.css"
import Header from './Header'
import AddressInformation from './AddressInformation'

const App = () => {
  return (
    <div id="builder_layot">
      <Header/>
      <BasicInfo/>
      <AddressInformation/>
    </div>
  )
}

export default App