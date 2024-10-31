import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import BatFamily from './Pages/BatFamily'
import Movies from './Pages/Movies'
import Games from './Pages/Games'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

const App = () => {
    return (
        <div>
             <div>
                     <p style={{height: '10vh'}} />
                     <Routes>
                         <Route index element={<Home />} />
                         <Route path='Movies' element={(<Movies/>)} />
                         <Route path='Games' element={(<Games/>)} />
                         <Route path='Family' element={(<BatFamily/>)} />
                         {/* <Route path='VideoGames' element={(<VideoGames/>)} /> */}
                     </Routes>
                 </div>
        </div>
    )
}

export default App
