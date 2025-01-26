import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Home.jsx"
import { Gallery } from "./Pages/Gallery.jsx"


function App(){
  return (
    <div>
      <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
    </Routes>
    </div>
  )
}




// THE NAVBAR 
const Navbar = () => {

  return(
    <div>
      Navbar
    </div>
  );
}



// THE CONTACT US SECTION
const ContactUs = () => {

  return(
    <div>
      Contact Us Section
    </div>
  );
}

export default App