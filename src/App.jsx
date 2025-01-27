import { Link, NavLink, Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Home.jsx"
import { Gallery } from "./Pages/Gallery.jsx"
import "./index.css"
import "./App.css"

// IMPORTING IMAGES 
import logo from "./assets/Version2/Logo.svg"
import { useEffect, useRef } from "react"

// GSAP
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"



function App(){
  const LandingAnimation = useRef(null)
 
  


  useEffect(() => {

    // Function to disable scroll wheel
    const disableScrollWheel = () => {
      document.body.style.overflow = "hidden"; // Disables all scrolling on the body
    };

    // Function to enable scroll wheel
    const enableScrollWheel = () => {   
      document.body.style.overflow = "auto"; // Restores default scroll behavior
    };


    disableScrollWheel()

    

    setTimeout(() => {
      console.log("working");
      return enableScrollWheel();
    }, 4500);

  }, []);


   // ================================== ANIMATION =============================

   useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("#WhiteLine",{
      width:"100%",
      duration:"1",
    })
    tl.from("#Lase",{
      y:"100",
      duration:"1",
      ease: "power4.out",
    },">")
    tl.from("#Tek",{
      y:"100",
      duration:"1",
      ease: "power4.out",
    },"-=0.8")
    tl.from("#Text",{
      y:"-100",
      duration:"1",
      ease: "power4.out",
    },"-=0.8")
    tl.to("#bigBlack",{
      y:"-100%",
      duration:"2",
      ease:"power4.in"
    },">")
    tl.to('#bigRed',{
      y:"-100%",
      duration:"2",
      ease:"power4.in",
    },"-=1.6")


   })

   




  return (
    <div >


      {/* ============================ ANIMATION ==================================== */}
 
      <div id="bigRed" ref={LandingAnimation} className=" fixed flex justify-center items-center overflow-hidden w-[100%] h-[100%] z-[500]">
      <div id="bigBlack"  className=" flex justify-center items-center w-[100%] h-[100%] relative blackAnimationBackground">


        <div className=" TextToAnimate ">


          
          <div className=" flex text-white sm1:text-5xl sm3:text-6xl xl:text-8xl ">


            <div  className=" overflow-hidden">
                <h1 id="Lase" className=" ls mr-2"><span className=" text-[#ff3131]">L</span>ase </h1> 
            </div>

            <div className=" overflow-hidden">
                <h1 id="Tek" className=" ls"><span className=" text-[#ff3131]">T</span>ek</h1>
            </div>
          </div>

          <div id="WhiteLine" className=" w-[0%] h-[2px] bg-white mb-2"></div>

          <div className="sm1:text-base md:text-lg lg:text-xl xl:text-2xl text-white overflow-hidden">
            <p id="Text" className=" ls ">Solution For Automation</p>
          </div>
        </div>







        

      </div>
      </div> 


      {/* ============================ ANIMATION ==================================== */}


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
  const highlighter = useRef(null)
  const home = useRef(null)
  const gallery = useRef(null)

  

  // WHEN HOME IS CLICKED
  const HomeBeingClicked = () => {
    
    gsap.to(highlighter.current , {
      x:"0"
    })
    gsap.to(gallery.current , {
      color:"black"
    })
    gsap.to(home.current , {
      color:"white"
    })
  }



  // WHEN GALLERY IS BEING CLICKED
  const GalleryBeingClicked = () => {
    
    gsap.to(highlighter.current , {
      x:"4.35rem"
    })
    gsap.to(home.current , {
      color:"black"
    })
    gsap.to(gallery.current , {
      color:"white"
    })
  }


  // GO TO TOP 
  const scrollToTop =  () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("hello")
  }

  // ALWAYS START THE PAGE FROM TOP
  scrollToTop();



  

  return(
    <nav className=" flex items-center justify-between
      bg-[#ffffff] max-w-[1500px] w-[100%]
      sm1:px-8 sm1:text-sm sm1:py-4
      sm2:px-[3rem]
      sm3:px-[4rem]
      text-lg
      lg:px-[5rem]
      ">

      {/* THE LOGO */}
      <Link onClick={scrollToTop} to="/"><img className=" sm1:w-[11rem]" src={logo} alt="" /></Link>

      {/* THE NAVIGATION BAR */}
        <div className=" flex items-center justify-between bg-[var(--grey)] relative
        sm1:px-1 sm1:py-1 sm1:mr-[4.4rem] 
        md:mr-[4rem]
        lg:mr-[3.2rem]
        ">

{/* ================================= ANIMATION ===================================== */}

          <div ref={highlighter}  className="
          
          w-[4.6rem] h-[1.9rem] absolute bg-[var(--lastekBlue)]" ></div>

          <NavLink onClick={HomeBeingClicked}
           ref={home}  className=" z-10 bg-transparent sm1:px-4 sm1:py-1 text-white" to="/">Home</NavLink>

          <NavLink onClick={GalleryBeingClicked} ref={gallery}  className=" z-10 bg-transparent sm1:px-4 sm1:py-1" to="/gallery">Gallery</NavLink>



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
        <div className=" bg-black w-[100%] h-[8rem]">

        </div>


    </div>
  );
}

export default App