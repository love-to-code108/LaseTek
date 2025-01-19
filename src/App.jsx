import "./App.css";
import logo from "./assets/Vector-1.svg";
import HeroSectionImg1 from "./assets/networking2 1.png";
import HeroSectionImg2CCTV from "./assets/cctv4 1.png";
import aboutUsSectionImg from "./assets/networking8 1.png";
import ServiceSectionImg2 from "./assets/networking7 1.png";
import ServiceSectionImg1 from "./assets/unsplash1 1.png";
import ServiceSectionImg3 from "./assets/networking4 1.png";
import ServiceSectionImg4 from "./assets/cctv6 1.png";
import ServiceSectionImg5 from "./assets/cctv5 2.png";
import ServiceSectionImg6 from "./assets/cctv3 1.png";
import { ServicesCard } from "./components/ServicesCard";

function App() {
  // DESKTOP VERSION    ==== MAX WIDTH = 1716 ====
  return (
    // THE MAIN GREY PAGE THE LOWEST LEVEL
    // ==MAIN 1==
    <div className="main-1 bg-[#f3f3f3] w-[100%] flex justify-center items-center z-0">
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
            <button className=" px-4 py-3 border-2 border-black ">
              Contact Us
            </button>
          </div>
        </div>

















        {/* HERO SECTION */}
        <div className="w-[100%] h-[90vh] flex items-center py-4 px-20 relative">
          {/* HERO SECTION WRITING SUPER BOX */}
          <div className=" ">
            {/* PRECISION IN NETWORKING */}
            <div className=" text-6xl font-bold">
              <h1>
                Precision In <span className=" text-[#383DAD]"><span className=" text-[#FF3131]">N</span>etworking</span>
              </h1>
            </div>

            {/* EXCELLENCE IN SECURITY */}
            <div className=" text-6xl font-bold mb-2">
              <h1>Excellence In Security</h1>
            </div>

            {/* THE REST OF THE TEXT */}
            <div className=" text-xl w-[42rem] mb-4">
              <p>
                Building lasting partnerships through integrity, innovation, and
                unmatched service—
                <span className=" text-[#383DAD]">
                  trusted by industry leaders like Tata Steel
                </span>{" "}
                and powered by <br /> global technology brands
              </p>
            </div>

            {/* THE CONTACT US BUTTON */}
            <div>
              <button className="text-3xl px-4 py-3 font-bold text-white bg-black">
                Contact Us
              </button>
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
        <div className="flex items-center justify-between py-20 px-20 relative ">
          {/*ABOUT US SECTION WRITING SUPER BOX */}
          <div className=" w-[45rem]">
            {/* HEADING */}
            <div className=" mb-2">
              <h1 className=" text-5xl font-bold">
                About <span className=" text-[#383DAD]">Us</span>
              </h1>
            </div>

            {/* THE TEXT SECTION */}
            <div>
              <p className=" text-xl">
                At the heart of LaseTech are our core values: integrity,
                honesty, innovation, and respect for people. We believe that
                true success lies not only in providing exceptional products and
                services but also in fostering public trust and conducting
                ourselves as responsible corporate citizens. Our approach is
                simple—become a partner in our clients challenges and work
                together to create sustainable, long-term solutions. With
                LaseTech, you’re not just choosing a service provider; you’re
                gaining a dedicated partner committed to helping you succeed.
              </p>
            </div>
          </div>

          {/* ABOUT US SECTION PICTURE 1 */}
          <div>
            <img src={aboutUsSectionImg} alt="" />
          </div>
        </div>

















        {/* SERVICES WE PROVIDE */}
        <div className="flex flex-col py-20 px-20 relative ">
          {/* SERVICES SECTION WRITING SUPER BOX */}
          <div className="w-[45rem]">
            {/* HEADING */}
            <h1 className=" text-5xl font-bold mb-2">
              <span className=" text-[#383DAD]">Services</span> We Provide
            </h1>

            {/* OTHER TEXT */}
            <p className="text-xl">
              We take pride in being trusted partners to industry leaders,
              including Tata Steel Ltd and many others across multiple
              locations. Our partnerships with global technology providers like
              Cisco, Fortigate, R&M, and Hikvision enable us to deliver
              world-class solutions that exceed expectations.
            </p>
          </div>

          {/* GRID FOR CARDS */}
          <div className=" py-20">
            <div className=" grid grid-cols-3 grid-flow-row gap-[4.5rem]">

              {/* CARD 1 */}
              <ServicesCard
                img={ServiceSectionImg1}
                heading="Network Design and Consultant"
                text="Comprehensive assessment of client requirements to design optimal network solutions.
Tailored network infrastructure planning for scalability and efficiency.
Consultation on selecting the best technologies and equipment."
              />

              {/* CARD 2 */}
              <ServicesCard
                img={ServiceSectionImg2}
                heading="Network Installation and Configuration"
                text="Professional installation of routers, switches, and other network devices.
Precise configuration of network hardware for seamless integration.
Implementation of secure and efficient network protocols."
              />

              {/* CARD 3 */}
              <ServicesCard
                img={ServiceSectionImg3}
                heading="Network Optimization and Device Integration"
                text="Connecting and integrating all network devices for smooth communication.
Troubleshooting and optimizing existing networks for peak performance.
Ensuring reliability, speed, and security across the entire network infrastructure."
              />

              {/* CARD 4 */}
              <ServicesCard
                img={ServiceSectionImg4}
                heading="CCTV System Design and Planning"
                text="Assessment of site requirements to design a comprehensive surveillance plan.
Strategic placement recommendations for maximum coverage and efficiency.
Consultation on selecting the best cameras and systems for client needs."
              />

              {/* CARD 5 */}
              <ServicesCard
                img={ServiceSectionImg5}
                heading="CCTV Installation and Setup"
                text="Professional installation of CCTV cameras, NVRs, and related equipment.
Secure wiring and integration with existing infrastructure.
Testing and calibration to ensure seamless operation."
              />

              {/* CARD 6 */}
              <ServicesCard
                img={ServiceSectionImg6}
                heading="CCTV Configuration and Management"
                text="Expert configuration of camera settings for optimal performance.
Regular monitoring, maintenance, and troubleshooting of CCTV systems.
Ensuring complete coverage of all critical areas for enhanced security.
"
              />
            </div>
          </div>
        </div>












        {/* WHY CHOOSE US */}
        <div className="flex flex-col py-20 px-20 relative ">

          {/* WHY CHOOSE US WRITING SUPER BOX */}
          <div className="w-[45rem]">

            {/* HEADING */}
            <h1 className=" text-5xl font-bold mb-2">Why <span className=" text-[#383DAD]">Choose Us</span></h1>

            {/* TEXT */}
            <p className="text-xl">Our approach is simple—become a partner in our clients' challenges and work together to create sustainable, long-term solutions. With LaseTech, you’re not just choosing a service provider; you’re gaining a dedicated partner committed to helping you succeed.</p>

          </div>



          {/* WHY CHOOSE US SECTION GRID FOR CARDS */}

        </div>





        {/* CONTACT US */}
        <div>{/* CONTACT US HEADING */}</div>

        {/* FOOTER */}
        <div></div>
      </div>
      {/* END OF ==MAIN-2== */}
    </div>
    // END OF ==MAIN-1==
  );
}

export default App;
