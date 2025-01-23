import { useNavigate } from "react-router-dom";
import logo from "../assets/Vector-1.png";






export const Gallery = () => {

  const navigate = useNavigate()


  // GO TO HOME NAVIGATION
  const GoToHome = () => {
    navigate("/");
  }






  return (


    // THE MAIN GREY PAGE THE LOWEST LEVEL
    // ==MAIN 1==
    <div className="main-1 bg-[#f3f3f3] w-[100%] flex justify-center items-center z-0">
      {/* ==MAIN 2==  */}
      <div className="main-2 bg-white z-10 w-[100vw] max-w-[1716px] relative">













        {/* NAVIGATION BAR */}
        <div
          className=" bg-white w-[100%] flex justify-between sticky top-0 z-[80]
            3xl:px-20
            2xl:py-4 2xl:pt-6 2xl:px-10 
             md:px-8 md:py-4
             
            "
        >
          {/* LOGO */}
          <div onClick={GoToHome} className=" cursor-pointer">
            <img src={logo} alt="" />
          </div>

          {/* THE SECTIONS */}
          <div className="flex items-center justify-evenly text-2xl w-[686px] ">
            <button onClick={GoToHome} className="navBarSections">
              Home
            </button>
          </div>

          {/* CONTACT US BUTTON */}
          <div className=" flex justify-center items-center text-3xl ">
            <button
              onClick=""
              className=" px-4 py-3 border-2 border-black hover:bg-black hover:text-white rounded-[0.6rem]"
            >
              Contact Us
            </button>
          </div>
        </div>



        {/* HEADING */}












        {/* CONTACT US */}
        <div className="flex justify-between py-20 2xl:px-10 3xl:px-20 relative xl:px-8
        md:px-8">


          {/* CONTACT US PART 1 */}
          <div className=" w-[30rem] h-[20rem]">
            {/* CONTACT US HEADING */}
            <h1 className=" text-8xl font-bold">Contact <span className=" text-[#383DAD]">Us</span></h1>

            {/* WRITING BELOW THE CONTACT US SECTION */}
            <div className=" w-[100%] flex justify-end text-xl">
            <p className=" mr-6">Your Business Deserves the Best—<span className=" text-[#FF3131]">Let’s Chat!</span></p>
            </div>
          </div>


          {/* CONTACT US PART 2 */}
          <div className=" flex flex-col text-xl relative right-[10rem] top-[2rem]">
              {/* MOBILE */}
                <p><span className=" font-bold">Mobile</span> : +91 - 9955440037</p>


              {/* EMAIL */}
              <p><span className=" font-bold">E-mail</span> : rksri@lasetek.in</p>

              <br />

              {/* ADDRESS */}
              <p className=" text-2xl font-bold">Lase Tek</p>
              <p>410, New Layout</p>
              <p>Sitaramdera, P.O. Agrico</p>
              <p>Jamshedpur, Jharkhand</p>
              <p>India - 831009</p>
          </div>

        </div>







          {/* FOOTER */}
          <div className=" w-[100%] h-[10rem] bg-black"></div>
      










      </div>
      {/* END OF MAIN 2 */}



    </div>
    // END OF MAIN 1
  );
};
