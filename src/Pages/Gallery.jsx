import { useNavigate } from "react-router-dom";
import logo from "../assets/Vector-1.png";

export const Gallery = () => {

  const navigate = useNavigate()


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
      </div>
    </div>
  );
};
