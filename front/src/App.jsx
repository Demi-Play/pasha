import { useState } from 'react'
import './App.css'
import AuthForm from './components/auth/AuthUtils'
import CatalogComponent from './components/catalog/Catalog'
import Wrapp from './components/wrapp/Wrapp'
import CardFrame from './components/card/CardFrame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AuthForm /> */}
      {/* <CatalogComponent /> */}
      <Wrapp/>
      {/* <CardFrame /> */}
    </>
  )
}

export default App
