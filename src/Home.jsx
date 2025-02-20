import "./App.css";
import logo from "./assets/Vector-1.png";
// HERO SECTION IMAGES
import HeroSectionQuote from "./assets/quoteHighlighter.svg"
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
import { useNavigate } from "react-router-dom";









// ============== THE MAIN HOME PAGE =======================
function HomePage() {

  const navigate = useNavigate();



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


  const GoToGallery = () => {
    navigate("/gallery");
  }


  const scrollToContactUs = () => {
    ContactUs.current.scrollIntoView({ behavior: "smooth" });
  };





  // ALWAYS START THE PAGE FROM TOP
  scrollToTop();


















  // DESKTOP VERSION    ==== MAX WIDTH = 1716 ====
  return (



    // THE MAIN GREY PAGE THE LOWEST LEVEL
    // ==MAIN 1==
    <div className="main-1 bg-[#f3f3f3] w-[100%] flex justify-center items-center z-0">





      {/* ==MAIN 2==  */}
      <div className="main-2 bg-white z-10 w-[100vw] max-w-[1716px] relative">





        {/* NAVIGATION BAR */}
        <div className=" bg-white w-[100%] flex justify-between sticky top-0 z-[80] px-8 py-4
        3xl:px-20
        2xl:py-4 2xl:pt-6 2xl:px-10 
         md:px-8 md:py-4
         sm3:px-8 sm3:py-4
         
        ">
          {/* LOGO */}
          <div onClick={scrollToTop} className=" cursor-pointer">
            <img src={logo} alt="" />
          </div>

          {/* THE SECTIONS */}
          <div className="flex items-center justify-evenly xl:text-2xl sm2:w-[686px]
          lg:text-xl sm3:text-xl sm1:w-[550px]">
            <button onClick={scrollToHome} className="navBarSections">Home</button>
            <button onClick={scrollToAboutUs} className="navBarSections">About Us</button>
            <button onClick={scrollToServicves} className="navBarSections">Services</button>
            <button onClick={GoToGallery} className="navBarSections">Gallery</button>
            <button onClick={scrollToWhyChooseUs} className="navBarSections">Why Choose Us</button>
          </div>

          {/* CONTACT US BUTTON */}
          <div className=" flex justify-center items-center xl:text-3xl text-xl">
            <button onClick={scrollToContactUs} className=" px-4 py-3 border-2 border-black hover:bg-black hover:text-white rounded-md">
              Contact Us
            </button>
          </div>
        </div>














        {/* HERO SECTION */}
        <div ref={Home} className=" relative bottom-[8rem]"></div>
        <div  className="w-[100%] h-[96vh] flex items-center 2xl:pt-4 2xl:px-10 3xl:px-20 relative
        md:px-8 md:pt-4
        sm3:px-8 sm3:pt-4
        px-8 pt-8
        heroSection-main
        
        ">
          {/* HERO SECTION WRITING SUPER BOX */}
          <div className=" ">

            {/* THE QUOTE HIGHLIGHTER */}
            <div className=" absolute top-[2.5rem]">
              <img className="sm1:w-[27rem] sm3:w-[30rem] md:w-[38rem]" src={HeroSectionQuote} alt="" />
            </div>


            {/* PRECISION IN NETWORKING */}
            <div className=" lg:text-6xl font-bold md:text-5xl
            sm3:text-4xl
            sm1:text-3xl">
              <h1>
                Precision In 
                <span className=" text-[#383DAD]">
                  <span className=" text-[#FF3131]"> N</span>etworking
                </span>
              </h1>
            </div>

            {/* EXCELLENCE IN SECURITY */}
            <div className=" lg:text-6xl font-bold mb-2 md:text-5xl
            sm3:text-4xl
            sm1:text-3xl">
              <h1>Excellence In Security</h1>
            </div>

            {/* THE REST OF THE TEXT */}
            <div className=" lg:text-xl w-[40rem] mb-4 md:text-base
            sm3:text-base sm3:w-[35rem]
            sm1:text-base sm1:w-[28rem]">
              {/* <p>
                Building lasting partnerships through integrity, innovation, and
                unmatched service—
                <span className=" text-[#383DAD]">
                  trusted by industry leaders like Tata Steel
                </span>{" "}
                and powered by <br /> global technology brands
              </p> */}
              <p>
                At LaseTek, we believe in building lasting partnerships rooted in integrity, innovation, and an unwavering commitment to excellence. <span className=" red-HL">Trusted by</span> industry leaders like <span className=" red-HL">Tata Steel</span>, we have consistently delivered solutions that empower businesses to stay ahead in a fast-evolving technological landscape.
                Our collaborations with global technology giants such as <span className=" red-HL">Cisco, Fortigate, R&M, and Hikvision</span>  allow us to integrate cutting-edge products into our services, ensuring reliability, scalability, and top-tier performance.
              </p>
            </div>

            {/* THE CONTACT US BUTTON */}
            <div>
              {/* <button onClick={scrollToContactUs} className="text-3xl px-4 py-3 font-bold text-white bg-black hover:border-black hover:border-2 hover:text-black hover:bg-white">
                Contact Us
              </button> */}
            </div>
          </div>

          {/* PICTURE 1 */}
          <div className=" absolute 2xl:top-[3rem] 2xl:right-[18rem] z-20
          xl:top-[2rem] xl:right-[16rem]
          heroSection-pic1
           ">
            <img className="sm1:w-[28rem] sm3:w-[auto] rounded-[0.8rem]" src={HeroSectionImg1} alt="" />
          </div>

          {/* PICTURE 2 */}
          <div className=" absolute bottom-[4rem] 2xl:right-[2.7rem] 3xl:right-[5rem] z-19
          xl:right-[2rem]
          heroSection-pic2
          ">
            <img className=" rounded-[0.8rem]" src={HeroSectionImg2CCTV} alt="" />
          </div>
        </div>




















        {/* ======= ABOUT US SECTION ======== */}
        <div ref={AboutUs} className=" relative bottom-[10rem]"></div>
        <div  className="px-8 flex items-center justify-between py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8
        sm3:px-8
        ">
          {/*ABOUT US SECTION WRITING SUPER BOX */}
          <div className=" lg:w-[45rem]
          md:w-[38rem]
          sm3:w-[35rem]
          sm1:w-[28rem]">
            {/* HEADING */}
            <div className=" mb-4">
              <h1 className=" md:text-5xl font-bold
              sm3:text-4xl
              sm1:text-3xl">
                About <span className=" text-[#383DAD]">Us</span>
              </h1>
            </div>

            {/* THE TEXT SECTION */}
            <div>
              <p className="text-base lg:text-xl ">
              At the heart of LaseTek are our core values integrity, honesty, innovation, and respect for people. We believe that true success lies not only in providing exceptional products and services as a <span className=" text-[#FF3131] font-semibold">Network Service Provider</span> but also in fostering public trust and conducting ourselves as responsible corporate citizens. Our approach is simple becoming a partner, in our client's challenges and working together to create sustainable, long-term solutions. With LaseTek, you’re not just choosing a service provider you’re gaining a dedicated partner committed to helping you succeed.
              </p>
            </div>
          </div>

          {/* ABOUT US SECTION PICTURE 1 */}
          <div>
            <img className="sm1:w-[28rem] xl:w-[35rem] md:w-[34rem] rounded-[0.8rem] max-w-[34rem]" src={aboutUsSectionImg} alt="" />
          </div>
        </div>















        {/* SERVICES WE PROVIDE */}
        <div ref={Services} className=" relative bottom-[8rem]"></div>
        <div  className="flex flex-col py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8
        sm3:px-8
        px-8">
          {/* SERVICES SECTION WRITING SUPER BOX */}
          <div className="sm1:w-[50rem] sm3:w-[55rem] ">
            {/* HEADING */}
            <h1 className=" md:text-5xl font-bold mb-4
            sm3:text-4xl
            text-3xl">
              <span className=" text-[#383DAD]">Services</span> We Provide
            </h1>

            {/* OTHER TEXT */}
            <div className="md:text-xl">
            We take pride in being trusted partners to industry leaders, including Tata Steel Ltd and many others across multiple locations. Our partnerships with global technology providers like Cisco, Fortigate, R&M, and Hikvision enable us to deliver world-class solutions that exceed expectations.
            <br />
            <br />

            <span className=" text-[#383dad] font-bold text-2xl">Our Client Base:</span>
            <ul className=" list-disc ml-6">
              <li><span className=" font-bold">Tata Steel Ltd</span> (Jamshedpur, Jharia, Noamundi, Joda)</li>
              <li className=" font-bold"> Tata Steel Ltd Meramandali</li>
              <li>Rourkela, Bokaro, Durgapur, Bhilai</li>
            </ul>


            <br />

            <span className=" text-[#383dad] font-bold text-2xl">Our Technology Partners:</span>
            
            <ul className=" list-disc ml-6">
              <li><span className=" font-bold text-[#ff3131]">Cisco:</span> Advanced networking switches for seamless connectivity</li>
              <li><span className=" font-bold text-[#ff3131]">Fortigate:</span> Cutting-edge firewall security systems to safeguard your business</li>
              <li><span className=" font-bold text-[#ff3131]">R&M:</span> High-quality networking components for robust infrastructure
              </li>
              <li><span className=" font-bold text-[#ff3131]">Hikvision:</span> Reliable cameras and NVR solutions for top-tier surveillance</li>
              <li><span className=" font-bold text-[#ff3131]">RIT</span></li>
            </ul>
            
            <br />
            At LaseTek, our services are backed by a commitment to excellence and innovation. Together with our clients and partners, <span className=" font-bold">we work tirelessly to ensure every project is executed with precision, quality, and on-time delivery.</span>
            </div>
          </div>

          {/* GRID FOR CARDS */}
          <div className=" py-20">
            <div className=" grid grid-cols-3 2xl:gap-[4.5rem]
            xl:gap-x-4 xl:gap-y-8
            md:justify-center md:content-center
            md:gap-y-8
            sm3:gap-8
            sm1:gap-6
            ">
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
                text="We offer professional installation of CCTV cameras, NVRs, and associated equipment, ensuring precise placement for comprehensive coverage. Our experts handle secure wiring and seamless integration with existing systems to maintain a clean, efficient setup. After installation, we thoroughly test and calibrate the system to ensure smooth and reliable operation."
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
        <div ref={WhyChooseUs} className=" relative bottom-[8rem]" ></div>
        <div  className="flex flex-col py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8
        px-8">
          {/* WHY CHOOSE US WRITING SUPER BOX */}
          <div className="w-[45rem] mb-12">
            {/* HEADING */}
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Why <span className=" text-[#383DAD]">Choose Us</span>
            </h1>

            {/* TEXT */}
            <p className="text-base md:text-xl">
              Our approach is simple—become a partner in our clients' challenges
              and work together to create sustainable, long-term solutions. With
              LaseTek, you’re not just choosing a service provider; you’re
              gaining a dedicated partner committed to helping you succeed.
            </p>
          </div>

          {/* WHY CHOOSE US SECTION GRID FOR CARDS */}
          <div className=" felx flex-col">
            {/* THE FIRST ROW */}
            <div className=" flex justify-between mb-4 md:mb-8
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
        md:px-8
        px-8">


          {/* CONTACT US PART 1 */}
          <div className=" w-[30rem] md:h-[20rem]">
            {/* CONTACT US HEADING */}
            <h1 className=" text-8xl font-bold">Contact <span className=" text-[#383DAD]">Us</span></h1>

            {/* WRITING BELOW THE CONTACT US SECTION */}
            <div className=" w-[100%] flex justify-end text-xl">
            <p className=" mr-6">Your Business Deserves the Best—<span className=" text-[#FF3131]">Let’s Chat!</span></p>
            </div>
          </div>


          {/* CONTACT US PART 2 */}
          <div className=" flex flex-col text-xl relative right-[2rem] lg:right-[10rem] top-[2rem]">
              {/* MOBILE */}
                <p><span className=" font-bold">Mobile</span> : +91 - 9955440037 <br/><span className=" ml-[4.39rem]">+91 - 8986640037</span> </p>


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
        <div className=" w-[100%] sm3:h-[10rem] bg-black"></div>
      </div>
      {/* END OF ==MAIN-2== */}
    </div>
    // END OF ==MAIN-1==
  );
}

export default HomePage;
