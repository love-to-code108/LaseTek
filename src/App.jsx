import { Link, NavLink, Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Home.jsx"
import { Gallery } from "./Pages/Gallery.jsx"
import "./index.css"

// IMPORTING IMAGES 
import logo from "./assets/Version2/Logo.svg"


function App(){
  return (
    <div >
      <div className="bg-[var(--lighterGrey)] flex justify-center w-[100%] sticky top-0 z-50">
      <Navbar/>
      </div>
      
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
    </Routes>


    <div id="ContactUs" className="bg-[var(--lighterGrey)] w-[100%] flex justify-center">
    <ContactUs/>
      </div>
    
    </div>
  )
}




// THE NAVBAR 
const Navbar = () => {



  

  return(
    <nav className=" flex items-center justify-between
      bg-[#ffffff] max-w-[1500px] w-[100%]
      sm1:px-8 sm1:text-sm sm1:py-4
      sm2:px-[3rem]
      sm3:px-[4rem]
      md:text-base
      lg:text-lg lg:px-[5rem]
      ">

      {/* THE LOGO */}
      <Link to="/"><img className=" sm1:w-[11rem]" src={logo} alt="" /></Link>

      {/* THE NAVIGATION BAR */}
        <div className=" flex items-center justify-between bg-[var(--grey)]
        sm1:px-1 sm1:py-1 sm1:mr-[4.4rem] 
        md:mr-[4rem]
        lg:mr-[3.2rem]
        ">
          <NavLink className="sm1:px-4 sm1:py-1" to="/">Home</NavLink>
          <NavLink className="sm1:px-4 sm1:py-1" to="/gallery">Gallery</NavLink>
        </div>

      {/* THE CONTACT US BUTTON */}
      <a href="#ContactUs" className=" bg-black text-white px-4 py-2 rounded-[3px]"> Contact Us</a>
    </nav>
  );
}





// THE CONTACT US SECTION
const ContactUs = () => {

  return(
    <div  className=" bg-white flex flex-col items w-[100%] max-w-[1500px]
    
    ">
      


      {/* THE WRAPPER */}
        <div className=" flex justify-between mb-8 px-8
        sm1:px-[3rem]
        sm3:px-[4rem]
        lg:px-[5rem]
        ">

        {/* THE BIG TEXT */}
          <div className=" flex flex-col w-[18rem]">

            {/* HEADING */}
            <h1 className=" font-bold text-6xl">Contact Us</h1>


            {/* SUBTITLE */}
            <p className=" text-sm font-bold text-end">Your Buisness Deserves the Best - <span className=" text-[var(--red)]">Let's Chat</span></p>

          </div>





        {/* THE ADDRESS */}
        <div className=" sm1:text-sm
        md:text-lg">

          {/* PHONE NUMBER */}
            <p><span className=" font-bold">Mobile</span> : +91 - 9955440037 <br /> <span className=" 
            sm1:ml-[3rem]
            ">+91 - 8986640037</span> </p>

            {/* EMAIL */}
            <p> <span className=" font-bold">E-mail</span> : rksri@lasetek.in</p>
            <br />

            {/* ADDRESS */}
            <p><span className=" text-xl font-bold">LaseTek</span><br />
            410, New Layout <br />
            Sitaramdera, P.O. Agrico <br />
            Jamshedpur, Jharkhand <br />
            India - 831009</p>
        </div>


        </div>


      {/* THE BLACK BOTTOM */}
        <div className=" bg-black w-[100%] h-[5rem]">

        </div>


    </div>
  );
}

export default App