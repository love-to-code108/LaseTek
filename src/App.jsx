import "./App.css";
import logo from "./assets/Vector-1.svg"








function App() {









  // DESKTOP VERSION    ==== MAX WIDTH = 1716 ====
  return (
    // THE MAIN GREY PAGE THE LOWEST LEVEL  
    // ==MAIN 1==
    <div className="main-1 bg-gray-600 w-[100%] flex justify-center items-center z-0">


      {/* ==MAIN 2==  */}
      <div className="main-2 bg-white z-10 w-[100vw] max-w-[1716px]">

      









      {/* NAVIGATION BAR */}
        <div className=" bg-white w-[100%] py-4 px-10 flex justify-between drop-shadow sticky top-0">


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
      <div className="w-[100%] h-[90vh]">

          {/* HERO SECTION WRITING SUPER BOX */}
          <div>

            {/* PRECISION IN NETWORKING */}
            <div>
              <h1>Precision In Networking</h1>
            </div>


            {/* EXCELLENCE IN SECURITY */}
            <div>
              <h1>Excellence In Security</h1>
            </div>

            {/* THE REST OF THE TEXT */}
            <div>
              <p>Building lasting partnerships through integrity, innovation, and unmatched service—<span>trusted by industry leaders like Tata Steel</span> and powered by global technology brands</p>
            </div>

            {/* THE CONTACT US BUTTON */}
            <div>
              <button>Contact Us</button>
            </div>
          </div>

          {/* PICTURE 1 */}


          {/* PICTURE 2 */}



      </div>



      {/* ABOUT US SECTION */}
        <div>

          {/*ABOUT US SECTION WRITING SUPER BOX */}



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
