import { useNavigate } from "react-router-dom";
import logo from "../assets/Vector-1.png";

// IMAGES
import image1 from "../assets/Gallery-Images/img1.jpg";
import image2 from "../assets/Gallery-Images/img2.jpg";
import image3 from "../assets/Gallery-Images/img3.jpg";
import image4 from "../assets/Gallery-Images/img4.jpg";
import image5 from "../assets/Gallery-Images/img5.jpg";
import image6 from "../assets/Gallery-Images/img6.jpg";
import image7 from "../assets/Gallery-Images/img7.jpg";
import image8 from "../assets/Gallery-Images/img8.jpg";
import image9 from "../assets/Gallery-Images/img9.jpg";
import image10 from "../assets/Gallery-Images/img10.jpg";
import image11 from "../assets/Gallery-Images/img11.jpg";
import image12 from "../assets/Gallery-Images/img12.jpg";
import image13 from "../assets/Gallery-Images/img13.jpg";
import image14 from "../assets/Gallery-Images/img14.jpg";
import image15 from "../assets/Gallery-Images/img15.jpg";
import image16 from "../assets/Gallery-Images/img16.jpg";
import image17 from "../assets/Gallery-Images/img17.jpg";


import { useRef } from "react";

export const Gallery = () => {
  const navigate = useNavigate();
  const ContactUs = useRef(null);



  // GO TO HOME NAVIGATION
  const GoToHome = () => {
    navigate("/");
  };

  // GO TO CONTACT US SECTION
  const scrollToContactUs = () => {
    ContactUs.current.scrollIntoView({ behavior: "smooth" });
  };

  // GO TO TOP 
  const scrollToTop =  () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ALWAYS START THE PAGE FROM TOP
  scrollToTop();


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
          <div className="flex items-center justify-evenly text-2xl w-[20rem] ">
            <button onClick={GoToHome} className="navBarSections">
              Home
            </button>
            <button onClick={GoToHome} className="navBarSections text-[#383dad]">
              Gallery
            </button>
          </div>

          {/* CONTACT US BUTTON */}
          <div className=" flex justify-center items-center text-3xl ">
            <button
              onClick={scrollToContactUs}
              className=" px-4 py-3 border-2 border-black hover:bg-black hover:text-white rounded-[0.6rem]"
            >
              Contact Us
            </button>
          </div>
        </div>








        {/* HEADING */}
        <div className="  py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8">
          <h1 className=" text-8xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl w-[50rem]">Step into our journey through this gallery, where each image tells a story of trust, dedication, and innovation. From the projects we’ve proudly completed to the partnerships we deeply value, this is a glimpse of the work that inspires us every day.</p>
        </div>









        {/* ALL THE IMAGES */}
        <div
          className="py-5 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8
        Gallery-masonry-style"
        >
          <img src={image1} alt="" className="Gallery-indivisual-styles"/>
          <img src={image2} alt="" className="Gallery-indivisual-styles"/>
          <img src={image3} alt="" className="Gallery-indivisual-styles"/>
          <img src={image4} alt="" className="Gallery-indivisual-styles"/>
          <img src={image5} alt="" className="Gallery-indivisual-styles"/>
          <img src={image6} alt="" className="Gallery-indivisual-styles"/>
          <img src={image7} alt="" className="Gallery-indivisual-styles"/>
          <img src={image8} alt="" className="Gallery-indivisual-styles"/>
          <img src={image9} alt="" className="Gallery-indivisual-styles"/>
          <img src={image10} alt="" className="Gallery-indivisual-styles"/>
          <img src={image11} alt="" className="Gallery-indivisual-styles"/>
          <img src={image12} alt="" className="Gallery-indivisual-styles"/>
          <img src={image13} alt="" className="Gallery-indivisual-styles"/>
          <img src={image14} alt="" className="Gallery-indivisual-styles"/>
          <img src={image15} alt="" className="Gallery-indivisual-styles"/>
          <img src={image16} alt="" className="Gallery-indivisual-styles"/>
          <img src={image17} alt="" className="Gallery-indivisual-styles"/>
        </div>










        {/* CONTACT US */}
        <div ref={ContactUs}
          className="flex justify-between py-20 2xl:px-10 3xl:px-20 relative xl:px-8
        md:px-8"
        >
          {/* CONTACT US PART 1 */}
          <div className=" w-[30rem] h-[20rem]">
            {/* CONTACT US HEADING */}
            <h1 className=" text-8xl font-bold">
              Contact <span className=" text-[#383DAD]">Us</span>
            </h1>

            {/* WRITING BELOW THE CONTACT US SECTION */}
            <div className=" w-[100%] flex justify-end text-xl">
              <p className=" mr-6">
                Your Business Deserves the Best—
                <span className=" text-[#FF3131]">Let’s Chat!</span>
              </p>
            </div>
          </div>

          {/* CONTACT US PART 2 */}
          <div className=" flex flex-col text-xl relative right-[10rem] top-[2rem]">
            {/* MOBILE */}
            {/* MOBILE */}
            <p><span className=" font-bold">Mobile</span> : +91 - 9955440037 <br/><span className=" ml-[4.39rem]">+91 - 8986640037</span> </p>

            {/* EMAIL */}
            <p>
              <span className=" font-bold">E-mail</span> : rksri@lasetek.in
            </p>

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
