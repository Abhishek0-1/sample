import Header from './Components/Header'
import { Outlet } from "react-router-dom";

import './App.css'
import Footer from './Components/Footer';



  function App() {

  return (
    <>
      <div className=''>
        <Header />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App
