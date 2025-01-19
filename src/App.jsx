import "./App.css";
import logo from "./assets/Vector-1.svg"
import HeroSectionImg1 from "./assets/networking2 1.png"
import HeroSectionImg2CCTV from "./assets/cctv4 1.png"







function App() {









  // DESKTOP VERSION    ==== MAX WIDTH = 1716 ====
  return (
    // THE MAIN GREY PAGE THE LOWEST LEVEL  
    // ==MAIN 1==
    <div className="main-1 bg-gray-600 w-[100%] flex justify-center items-center z-0">


      {/* ==MAIN 2==  */}
      <div className="main-2 bg-white z-10 w-[100vw] max-w-[1716px]">

      









      {/* NAVIGATION BAR */}
        <div className=" bg-white w-[100%] py-4 pt-6 px-20 flex justify-between sticky top-0 z-[80]">


        {/* LOGO */}
          <div>
            <img src={logo} alt="" />
          </div>

        {/* THE SECTIONS */}
        <div className="flex items-center justify-evenly text-2xl w-[686px] ">
            <button className="navBarSections">Home</button>
            <button className="navBarSections">About Us</button>
            <button className="navBarSections">Services</button>
            <button className="navBarSections">Why Choose Us</button>
        </div>


        {/* CONTACT US BUTTON */}
        <div className=" flex justify-center items-center text-3xl ">
          <button className=" px-4 py-3 border-2 border-black ">Contact Us</button>
        </div>

        </div>











      {/* HERO SECTION */}
      <div className="w-[100%] h-[90vh] flex items-center py-4 px-20 relative">

          {/* HERO SECTION WRITING SUPER BOX */}
          <div className=" ">

            {/* PRECISION IN NETWORKING */}
            <div className=" text-6xl font-bold">
              <h1>Precision In <span className=" text-[#FF3131]">Networking</span></h1>
            </div>


            {/* EXCELLENCE IN SECURITY */}
            <div className=" text-6xl font-bold mb-2">
              <h1>Excellence In Security</h1>
            </div>

            {/* THE REST OF THE TEXT */}
            <div className=" text-xl w-[42rem] mb-4">
              <p>Building lasting partnerships through integrity, innovation, and unmatched service—<span className=" text-[#FF3131]">trusted by industry leaders like Tata Steel</span> and powered by <br /> global technology brands</p>
            </div>

            {/* THE CONTACT US BUTTON */}
            <div>
              <button className="text-3xl px-4 py-3 font-bold text-white bg-black">Contact Us</button>
            </div>
          </div>



          {/* PICTURE 1 */}
          <div className=" absolute top-[3rem] right-[18rem] z-20">
            <img src={HeroSectionImg1} alt="" />
          </div>

          {/* PICTURE 2 */}
          <div className=" absolute bottom-[4rem] right-[5rem] z-19">
            <img src={HeroSectionImg2CCTV} alt="" />
          </div>


      </div>










      {/* ABOUT US SECTION */}
        <div>

          {/*ABOUT US SECTION WRITING SUPER BOX */}
          <div>


            {/* HEADING */}
            <div>
              <h1>About <span>Us</span></h1>
            </div>


            {/* THE TEXT SECTION */}
            <div>
              <p>At the heart of LaseTech are our core values: integrity, honesty, innovation, and respect for people. We believe that true success lies not only in providing exceptional products and services but also in fostering public trust and conducting ourselves as responsible corporate citizens.
              Our approach is simple—become a partner in our clients' challenges and work together to create sustainable, long-term solutions. With LaseTech, you’re not just choosing a service provider; you’re gaining a dedicated partner committed to helping you succeed.</p>
            </div>

          </div>


          {/* ABOUT US SECTION PICTURE 1 */}


        </div>




      {/* SERVICES WE PROVIDE */}
      <div>

        {/* SERVICES SECTION WRITING SUPER BOX */}


        {/* GRID FOR CARDS */}


      </div>




      {/* WHY CHOOSE US */}
      <div>


        {/* WHY CHOOSE US WRITING SUPER BOX */}



        {/* WHY CHOOSE US SECTION GRID FOR CARDS */}



      </div>


      {/* CONTACT US */}
      <div>


        {/* CONTACT US HEADING */}

      </div>



      {/* FOOTER */}
      <div>

      </div>










      </div> 
      {/* END OF ==MAIN-2== */}


    </div> 
    // END OF ==MAIN-1==
  );
}

export default App;
