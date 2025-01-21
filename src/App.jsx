import "./App.css";
import logo from "./assets/Vector-1.png";
import HeroSectionImg1 from "./assets/networking2 1.png";
import HeroSectionImg2CCTV from "./assets/cctv4 1.png";

import aboutUsSectionImg from "./assets/networking8 1.png";

// SERVICE SECTION IMAGES
import ServiceSectionImg2 from "./assets/img1.png";
import ServiceSectionImg1 from "./assets/img2.png";
import ServiceSectionImg3 from "./assets/img3.png";
import ServiceSectionImg4 from "./assets/cctv6 1.png";
import ServiceSectionImg5 from "./assets/cctv5 2.png";
import ServiceSectionImg6 from "./assets/cctv3 1.png";

// WHY CHOOSE US IMAGES
import WhyChooseUsImg1 from "./assets/trophy.png";
import WhyChooseUsImg2 from "./assets/team.png";
import WhyChooseUsImg3 from "./assets/gears.png";
import WhyChooseUsImg4 from "./assets/favorites.png";

import { ServicesCard } from "./components/ServicesCard";
import { WhyChooseUsCard } from "./components/WhyChooseUsCard";
import { useRef } from "react";

function App() {
  const Home = useRef(null);
  const AboutUs = useRef(null);
  const Services = useRef(null);
  const WhyChooseUs = useRef(null);
  const ContactUs = useRef(null);


  const scrollToTop =  () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const scrollToHome = () => {
    Home.current.scrollIntoView({ top: 0,behavior: "smooth" });
  };
  const scrollToAboutUs = () => {
    AboutUs.current.scrollIntoView({ top: 0,behavior: "smooth" });
  };
  const scrollToServicves = () => {
    Services.current.scrollIntoView({ top: 0,behavior: "smooth" });
  };
  const scrollToWhyChooseUs = () => {
    WhyChooseUs.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContactUs = () => {
    ContactUs.current.scrollIntoView({ behavior: "smooth" });
  };








  // DESKTOP VERSION    ==== MAX WIDTH = 1716 ====
  return (



    // THE MAIN GREY PAGE THE LOWEST LEVEL
    // ==MAIN 1==
    <div className="main-1 bg-[#f3f3f3] w-[100%] flex justify-center items-center z-0">





      {/* ==MAIN 2==  */}
      <div className="main-2 bg-white z-10 w-[100vw] max-w-[1716px]">





        {/* NAVIGATION BAR */}
        <div className=" bg-white w-[100%] flex justify-between sticky top-0 z-[80]
        3xl:px-20
        2xl:py-4 2xl:pt-6 2xl:px-10 
         md:px-8 md:py-4
         
        ">
          {/* LOGO */}
          <div onClick={scrollToTop} className=" cursor-pointer">
            <img src={logo} alt="" />
          </div>

          {/* THE SECTIONS */}
          <div className="flex items-center justify-evenly text-2xl w-[686px] ">
            <button onClick={scrollToHome} className="navBarSections">Home</button>
            <button onClick={scrollToAboutUs} className="navBarSections">About Us</button>
            <button onClick={scrollToServicves} className="navBarSections">Services</button>
            <button onClick={scrollToWhyChooseUs} className="navBarSections">Why Choose Us</button>
          </div>

          {/* CONTACT US BUTTON */}
          <div className=" flex justify-center items-center text-3xl ">
            <button onClick={scrollToContactUs} className=" px-4 py-3 border-2 border-black hover:bg-black hover:text-white">
              Contact Us
            </button>
          </div>
        </div>














        {/* HERO SECTION */}
        <div ref={Home} className="w-[100%] h-[96vh] flex items-center 2xl:py-4 2xl:px-10 3xl:px-20 relative
        md:px-8 md:py-4
        heroSection-main
        ">
          {/* HERO SECTION WRITING SUPER BOX */}
          <div className=" ">
            {/* PRECISION IN NETWORKING */}
            <div className=" text-6xl font-bold">
              <h1>
                Precision In{" "}
                <span className=" text-[#383DAD]">
                  <span className=" text-[#FF3131]">N</span>etworking
                </span>
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
              <button onClick={scrollToContactUs} className="text-3xl px-4 py-3 font-bold text-white bg-black hover:border-black hover:border-2 hover:text-black hover:bg-white">
                Contact Us
              </button>
            </div>
          </div>

          {/* PICTURE 1 */}
          <div className=" absolute 2xl:top-[3rem] 2xl:right-[18rem] z-20
          xl:top-[2rem] xl:right-[16rem]
          heroSection-pic1
           ">
            <img src={HeroSectionImg1} alt="" />
          </div>

          {/* PICTURE 2 */}
          <div className=" absolute bottom-[4rem] 2xl:right-[2.7rem] 3xl:right-[5rem] z-19
          xl:right-[2rem]
          heroSection-pic2
          ">
            <img src={HeroSectionImg2CCTV} alt="" />
          </div>
        </div>




















        {/* ======= ABOUT US SECTION ======== */}
        <div ref={AboutUs} className="flex items-center justify-between py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8">
          {/*ABOUT US SECTION WRITING SUPER BOX */}
          <div className=" w-[45rem]
          md:w-[38rem]">
            {/* HEADING */}
            <div className=" mb-2">
              <h1 className=" text-5xl font-bold">
                About <span className=" text-[#383DAD]">Us</span>
              </h1>
            </div>

            {/* THE TEXT SECTION */}
            <div>
              <p className=" text-xl">
              At the heart of LaseTech are our core values integrity, honesty, innovation, and respect for people. We believe that true success lies not only in providing exceptional products and services as a <span className=" text-[#FF3131] font-semibold">Network Service Provider</span> but also in fostering public trust and conducting ourselves as responsible corporate citizens. Our approach is simple becoming a partner, in our client's challenges and working together to create sustainable, long-term solutions. With LaseTech, you’re not just choosing a service provider you’re gaining a dedicated partner committed to helping you succeed.
              </p>
            </div>
          </div>

          {/* ABOUT US SECTION PICTURE 1 */}
          <div>
            <img className=" xl:w-[35rem] md:w-[34rem]" src={aboutUsSectionImg} alt="" />
          </div>
        </div>















        {/* SERVICES WE PROVIDE */}
        <div ref={Services} className="flex flex-col py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8">
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
            <div className=" grid grid-cols-3 grid-flow-row 2xl:gap-[4.5rem]
            xl:gap-x-4 xl:gap-y-8
            md:justify-center md:content-center
            md:gap-y-8">
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
        <div ref={WhyChooseUs} className="flex flex-col py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8">
          {/* WHY CHOOSE US WRITING SUPER BOX */}
          <div className="w-[45rem] mb-12">
            {/* HEADING */}
            <h1 className=" text-5xl font-bold mb-2">
              Why <span className=" text-[#383DAD]">Choose Us</span>
            </h1>

            {/* TEXT */}
            <p className="text-xl">
              Our approach is simple—become a partner in our clients' challenges
              and work together to create sustainable, long-term solutions. With
              LaseTech, you’re not just choosing a service provider; you’re
              gaining a dedicated partner committed to helping you succeed.
            </p>
          </div>

          {/* WHY CHOOSE US SECTION GRID FOR CARDS */}
          <div className=" felx flex-col">
            {/* THE FIRST ROW */}
            <div className=" flex justify-between mb-8
            ">
              <WhyChooseUsCard
                img={WhyChooseUsImg1}
                heading="Proven Expertise"
                text="With over 40 years of cumulative experience, our team has successfully delivered 100+ projects across various industries, ensuring quality and reliability at every step."
              />
              <WhyChooseUsCard
                img={WhyChooseUsImg2}
                heading="Trusted by Industry Leaders"
                text="Our strong partnerships with clients like Tata Steel Ltd and global technology providers like Cisco, Fortigate, R&M, and Hikvision reflect the trust placed in our services."
              />
            </div>

            {/* THE SECOND ROW */}
            <div className=" flex justify-between
            ">
              <WhyChooseUsCard
                img={WhyChooseUsImg3}
                heading="Tailored Solutions"
                text="We understand that every business is unique. That’s why we offer customized networking and security solutions designed to meet your specific needs."
              />
              <WhyChooseUsCard
                img={WhyChooseUsImg4}
                heading="Commitment to Excellence"
                text="As an MSME-certified company, we are dedicated to delivering top-quality services with a focus on precision, innovation, and timely completion of projects."
              />
            </div>
          </div>
        </div>














        {/* CONTACT US */}
        <div ref={ContactUs} className="flex justify-between py-20 2xl:px-10 3xl:px-20 relative xl:px-8
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
              <p>Jamshedpur, Jharkand</p>
              <p>India - 831009</p>
          </div>

        </div>








        {/* FOOTER */}
        <div className=" w-[100%] h-[10rem] bg-black"></div>
      </div>
      {/* END OF ==MAIN-2== */}
    </div>
    // END OF ==MAIN-1==
  );
}

export default App;
