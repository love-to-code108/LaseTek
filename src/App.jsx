import { Route, Routes } from "react-router-dom"
import HomePage from "./Home.jsx"
import { Gallery } from "./Pages/Gallery.jsx"


function App(){
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
  )
}

export default App