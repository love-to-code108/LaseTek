// IMPORTING IMAGES
import heroSectionImg1 from "../assets/Version2/HeroSection1.png"
import heroSectionImg2 from "../assets/Version2/HeroSection3.png"
import heroSectionImg3 from "../assets/Version2/HeroSection2.png"
// QUOTE SECTION 
import doubleQuotesImg from "../assets/Version2/dobuleQuotes.svg"
// ABOUT US SECTION
import aboutUsSectionImg from "../assets/Version2/aboutUsSectionImg.png"
import { ServicesWeProvideCardV2 } from "../components/ServicesWeProvideCardV2"
// SERVICES WE PROVIDE
import servicesWeProvideImg1 from "../assets/img1.png"
import servicesWeProvideImg2 from "../assets/img2.png"
import servicesWeProvideImg3 from "../assets/img3.png"
import cctvImg1 from "../assets/Version2/cctv1.png"
import cctvImg2 from "../assets/Version2/cctv2.png"
import cctvImg3 from "../assets/Version2/cctv3.png"
// WHY CHOOSE US SECTION 
import whyChooseUsimg1 from "../assets/Version2/gears.png" 
import whyChooseUsimg2 from "../assets/Version2/favorites.png" 
import whyChooseUsimg3 from "../assets/Version2/team.png" 
import whyChooseUsimg4 from "../assets/Version2/trophy.png" 
import { LineBreakV2 } from "../components/LineBreakV2"
import { WhyChooseUsSectionV2 } from "../components/WhyChooseUsSectionV2"

// IMPORTING GSAP
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react"




export const HomePage = () => {



  gsap.registerPlugin(useGSAP,ScrollTrigger);

  useGSAP(() => {


    // NETWORKING SERVICES


    // CARD 1
    gsap.to("#ServiceCard1",{
      scrollTrigger:{
        
      trigger:"#ServiceCard1",
      pin: true,
      scrub: 1,
      start: "top 100px",
      // markers:true,
      end:"780px",
      },
      duration:1,      
    })


    // CARD 2
    gsap.to("#ServiceCard2",{
      scrollTrigger:{
        
      trigger:"#ServiceCard2",
      pin: true,
      scrub: 1,
      start: "top 100px",
      end:"380px",
      // markers:true,
      },
      duration:1,      
    })


    // NETWORKING SERVICES
    gsap.to("#NetworkingService",{
      scrollTrigger:{
        
      trigger:"#NetworkingService",
      pin: true,
      scrub: 1,
      start: "top 100px",
      end:"780px",
      // markers:true,
      },
      duration:1,      
    })





    // CCTV SERVICES
    // CARD 1
    gsap.to("#CCTVCard",{
      scrollTrigger:{
        
      trigger:"#CCTVCard1",
      pin: true,
      scrub: 1,
      start: "top 100px",
      // markers:true,
      end:"780px",
      },
      duration:1,      
    })


    // CARD 2
    gsap.to("#CCTVCard2",{
      scrollTrigger:{
        
      trigger:"#CCTVCard2",
      pin: true,
      scrub: 1,
      start: "top 100px",
      end:"380px",
      // markers:true,
      },
      duration:1,      
    })


    // CCTV SERVICES
    gsap.to("#CCTVService",{
      scrollTrigger:{
        
      trigger:"#CCTVService",
      pin: true,
      scrub: 1,
      start: "top 100px",
      end:"780px",
      // markers:true,
      },
      duration:1,      
    })



    // WHY CHOOSE US SECTION 
    gsap.to("#whyChooseUs",{
      scrollTrigger:{
        
      trigger:"#whyChooseUs",
      pin: true,
      scrub: 1,
      start: "top 100px",
      end:"440px",
      // markers:true,
      },
      duration:1,      
    })

    // WHY CHOOSE US CARD 1
    gsap.to("#whyChooseUsCard1",{
      scrollTrigger:{
        
      trigger:"#whyChooseUsCard1",
      pin: true,
      scrub: 1,
      start: "top 80px",
      end:"300px",
      // markers:true,
      },
      duration:1,      
    })

    // WHY CHOOSE US CARD 2
    gsap.to("#whyChooseUsCard2",{
      scrollTrigger:{
        
      trigger:"#whyChooseUsCard2",
      pin: true,
      scrub: 1,
      start: "top 80px",
      end:"300px",
      // markers:true,
      },
      duration:1,      
    })

     // WHY CHOOSE US CARD 3
     gsap.to("#whyChooseUsCard3",{
      scrollTrigger:{
        
      trigger:"#whyChooseUsCard3",
      pin: true,
      scrub: 1,
      start: "top 100px",
      end:"100px",
      // markers:true,
      },
      duration:1,      
    })

    
    
  })














   // GO TO TOP 
   const scrollToTop =  () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ALWAYS START THE PAGE FROM TOP
  // scrollToTop();


  return (


    
    
    // ============= MAIN 1 =============== START
    <div className=" flex justify-center bg-[var(--lighterGrey)]">
      
      


      <div className=" flex justify-center max-w-[1700px]">

        {/* =============== MAIN 2 ============= START*/}
        <div className=" flex flex-col bg-[var(--white)] max-w-[1500px] w-[100%]
        sm1:px-8 
        sm2:px-[3rem]
        sm3:px-[4rem]
        lg:px-[5rem]
        ">
      











          {/* HERO SECTION  */}
            <div className="flex flex-col relative min-h-[30rem]
            sm1:mb-[3rem] sm1:py-10 sm1:h-[30rem]
            sm3:h-[90vh]
            ">


              {/* HERO SECTION WRITING WRAPPER */}
              <div className=" w-[32rem]
              xl:w-[39rem] heroSectionWriting">

                {/* PRECISION IN NETWORKING */}
                  <h1 className=" text-5xl
                  xl:text-6xl font-bold">Precision In <span  className=" text-[var(--red)]">Networking</span></h1>
                    
                {/* EXCELLENCE IN SECURITY */}
                <h1 className=" text-5xl
                xl:text-6xl font-bold mb-2">Excellence in Security</h1>

                {/* PARAGRAPH */}
                <p className=" w-[30rem] 
                sm1:text-sm
                md:text-base
                 ">Building lasting partnerships through integrity, innovation, and unmatched service— <span className=" text-[var(--red)]">trusted by industry leaders like Tata Steel</span> and powered by global technology brands</p>
                  

              </div>


                {/* HERO SECTION IMAGES WRAPPER */}
                <div className=" flex items-end w-[100%] justify-between">


                  {/* IMAGE 1 */}
                  <img className=" absolute bottom-0 left-0 max-w-[36rem]
                  sm1:h-auto sm1:w-[40%]
                  sm3:w-[44%]
                  md:w-[44%]

                  " 
                  src={heroSectionImg1} alt="" />



                  {/* IMAGE 2 */}
                  <img className="heroSectionImg2 absolute bottom-0 object-cover
                  sm1:left-[43%] sm1:w-[16rem] sm1:h-[16rem]
                  sm2:left-[43%] sm2:w-[18rem] sm2:h-[18rem]
                  sm3:left-[47%] sm3:w-[16rem] sm3:h-[22rem]
                  md:left-[47%] md:h-[23rem] md:w-[18rem]
                  lg:h-[25rem]
                  "

                    src={heroSectionImg2} alt="" />



                  {/* IMAGE 3 */}
                  <img className="heroSectionImg3 absolute bottom-0 right-0 object-cover 
                  sm1:w-[27%] sm1:h-[29rem] 
                  sm3:w-[27%] sm3:h-[33rem]
                  lg:h-[36rem]"

                   src={heroSectionImg3} alt="" />
                </div>

            </div>













      {/* THE QUOTE */}
          <div className=" flex justify-end items-center bg-[var(--lastekBlue)] relative max-w-[1500px]
          sm1:py-10 sm1:mb-[1rem] sm1:w-[100%] sm1:right-[2rem] 
          sm2:right-[3rem] 
          sm3:right-[4rem]
          md:right-[5rem]
          ">

            


            {/* THE QUOTE */}
            <div className=" text-4xl text-white relative 
            sm1:right-[8rem]
            sm3:right-[9rem]
            md:text-5xl
            ">
              <p>Where Vision Meets Aspiration</p>
            </div>


            {/* QUOTE IMG 1 */}
            <div>
                <img className=" absolute 
                sm1:w-[5rem] bottom-0 right-[2rem]
                "
                 src={doubleQuotesImg} alt="" />
            </div>



          </div>














      {/* ABOUT US */}
        <div className=" flex flex-col
        sm1:py-10 
        ">

          {/* HEADING */}
          <div className="  font-bold 
          sm1:text-4xl sm1:mb-2
          md:text-5xl 
          ">
            <h1>About Us</h1>
          </div>

          {/* PARAGRAPH */}
          <div className=" 
          sm1:text-sm sm1:w-[33rem] mb-6
          md:text-lg md:w-[37rem]
          ">
            <p>At the heart of LaseTek are our core values integrity, honesty, innovation, and respect for people. We believe that true success lies not only in providing exceptional products and services as a Network Service Provider but also in fostering public trust and conducting ourselves as responsible corporate citizens. Our approach is simple becoming a partner, in our client's challenges and working together to create sustainable, long-term solutions. With LaseTek, you’re not just choosing a service provider you’re gaining a dedicated partner committed to helping you succeed.</p>
          </div>


          {/* IMAGE */}
          <div className=" w-[100%] flex justify-end">
            <img className=" 
            sm1:w-[35rem]
            md:w-[40rem]" src={aboutUsSectionImg} alt="" />
          </div>

        </div>

















      {/* SERVICES WE PROVIDE */}
      <div className=" flex flex-col
      sm1:py-10">
        

        {/* SERVICES SECTION WRITING SUPER BOX */}
        <div className="sm1:w-[50rem] sm3:w-[55rem] ">
            {/* HEADING */}
            <h1 className=" md:text-5xl font-bold mb-4
            sm1:text-4xl
            ">
              <span className="">Services</span> We Provide
            </h1>

            {/* OTHER TEXT */}
            <div className="
            sm1:text-sm
            md:text-xl">
            We take pride in being trusted partners to industry leaders, including Tata Steel Ltd and many others across multiple locations. Our partnerships with global technology providers like Cisco, Fortigate, R&M, and Hikvision enable us to deliver world-class solutions that exceed expectations.
            <br />
            <br />

            <span className=" text-[#383dad] font-bold text-2xl">Our Client Base:</span>
            <ul className=" list-disc ml-6 
             
            ">
              <li><span className=" font-bold">Tata Steel Ltd</span> (Jamshedpur, Jharia, Noamundi, Joda)</li>
              <li className=" font-bold"> Tata Steel Ltd Meramandali</li>
              <li>Rourkela, Bokaro, Durgapur, Bhilai</li>
            </ul>


            <br />

            <span className=" text-[#383dad] font-bold text-2xl">Our Technology Partners:</span>
            
            <ul className=" list-disc ml-6
            
            ">
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

      </div>
















      {/* NETWORKING SERVICES */}
        <div className=" flex justify-between 
        sm1:py-10 sm1:mb-[4rem]
        ">



          {/* NETWORKING SERVICE HEADING */}
          <div id="NetworkingService" className=" text-4xl font-bold
          sm1:w-[14rem]
          sm3:w-[25rem]
          md:text-5xl md:w-[28rem]
          ">
            <h1>Networking Services</h1>
          </div>


          {/* THE LINE THAT DIVIDES */}
          <div className=" flex">
            <div className=" bg-[var(--darkGrey)] w-[1px]"></div>


          {/* ALL THE CARDS IN DIV COLUMN */}
          <div className=" flex flex-col items-start">


            {/* CARD 1 */}
            <div id="ServiceCard1" className=" bg-white">
            <ServicesWeProvideCardV2 
            heading = "Network Design and Consultant"
            para = "At LaseTek, we design tailored network solutions that ensure seamless connectivity, reliability, and scalability. Our consultation services focus on understanding your unique needs, providing expert guidance to build networks that support your growth. Whether upgrading an existing system or starting from scratch, we’re here to simplify the process and keep you connected."
            img = {servicesWeProvideImg1} />
           {/* <LineBreakV2/> */}
           </div>



           {/* CARD 2 */}
           <div id="ServiceCard2" className=" bg-white z-[2] h-[28rem] flex flex-col justify-center items-center">
           <ServicesWeProvideCardV2 
           heading = "Network Installation and Configuration"

           para = "Setting up a network doesn’t have to be complicated. At LaseTek, we specialize in professional installation and configuration of network systems tailored to your needs. From connecting devices to ensuring optimal performance, we handle everything with precision and care. Let us simplify the process so you can focus on what matters most—your business"
           img = {servicesWeProvideImg2}
           
           />
           {/* <LineBreakV2/> */}
           </div>




           {/* CARD 3 */}
           <div id="ServiceCard2" className=" bg-white z-[2] h-[28rem] flex flex-col justify-center items-center">
           <ServicesWeProvideCardV2 
           heading = "Network Optimization and Device Integration"
           para = "At LaseTek, we ensure your network runs at peak performance by optimizing every connection and integrating devices seamlessly. Our solutions are designed to enhance speed, reliability, and efficiency, making your systems work smarter together. Let us help you get the most out of your network."
           img = {servicesWeProvideImg3}
           />
           </div>
           
          </div>
          </div>


        </div>
















      {/* CCTV SERVICES */}
      <div className=" flex justify-between 
        sm1:py-10 sm1:mb-[4rem] 
        ">



          {/* NETWORKING SERVICE HEADING */}
          <div id="CCTVService" className=" text-4xl font-bold
          sm1:w-[14rem]
          sm3:w-[25rem]
          md:text-5xl
          ">
            <h1>CCTV Services</h1>
          </div>


          {/* THE LINE THAT DIVIDES */}
          <div className=" flex">
            <div className=" bg-[var(--darkGrey)] w-[1px]"></div>


          {/* ALL THE CARDS IN DIV COLUMN */}
          <div className=" flex flex-col items-start">


            {/* CARD 1 */}
            <div id="CCTVCard1" className=" bg-white">
            <ServicesWeProvideCardV2 
            heading = "CCTV System Design and Planning"
            para = "Effective CCTV System Design and Planning is the foundation of robust security. At LaseTek, we assess your unique requirements, analyze the layout, and craft tailored solutions to ensure optimal coverage. Our detailed planning ensures no blind spots, seamless integration with existing systems, and scalability for future needs, delivering a security framework you can trust."
            img = {cctvImg1} />
           {/* <LineBreakV2/> */}
           </div>



           {/* CARD 2 */}
           <div id="CCTVCard2" className=" bg-white z-[2] h-[28rem] flex flex-col justify-center items-center">
           <ServicesWeProvideCardV2 
           heading = "CCTV Installation and Setup"

           para = "Seamless CCTV Installation and Setup is key to reliable surveillance. At LaseTek, we handle everything from mounting cameras to setting up NVRs and wiring with precision. Our team ensures every component is securely installed and perfectly positioned, guaranteeing comprehensive coverage and immediate functionality for your peace of mind."
           img = {cctvImg2}
           
           />
           {/* <LineBreakV2/> */}
           </div>




           {/* CARD 3 */}
           <div id="CCTVCard3" className=" bg-white z-[2] h-[28rem] flex flex-col justify-center items-center">
           <ServicesWeProvideCardV2 
           heading = "CCTV Configuration and Management"
           para = "Proper CCTV Configuration and Management are essential for maximizing system performance. At LaseTek, we fine-tune your cameras, NVRs, and related equipment to ensure optimal functionality. From customizing settings to managing system updates, we provide ongoing support to keep your surveillance system running smoothly and securely."
           img = {cctvImg3}
           />
           </div>



           
          </div>
          </div>


        </div>























      {/* OUR ACHIEVEMENTS  */}
      <div className=" 
      sm1:py-10 sm1:mb-[6rem]
      md:mb-[8rem]
      ">


        {/* HEADING */}
        <div className=" 
        sm1:text-4xl font-bold mb-2
        md:text-5xl
        ">
          <h1>Our Achievements</h1>
        </div>


        {/* THE PARAGRAPH */}
          <div className=" 
          sm1:mb-[4rem] sm1:text-sm
          md:text-lg

          ">
            <p>At LaseTek, we take pride in our achievements, having successfully completed over 100 projects for esteemed clients like Tata Steel. With 40+ years of combined expertise, we’ve built strong partnerships with global technology leaders such as Cisco, Fortigate, and Hikvision. Our commitment to quality and innovation has positioned us as a trusted provider in networking and security solutions.</p>
          </div>


        {/* THREE STATS */}
        <div className=" flex w-[100%] sm1:justify-around
        
        " >


          {/* STAT 1 */}
            <div className=" flex flex-col justify-center items-center text-sm
            md:text-xl
            ">
              <p>Project Completed</p>
              <h1 className=" text-7xl font-bold
              sm1:text-4xl md:text-5xl
              ">100+</h1>
            </div>

            <div className=" w-[2px] bg-[var(--darkGrey)]"></div>


          {/* STAT 2  */}
          <div className=" flex flex-col justify-center items-center text-sm
          md:text-xl
          ">
              <p>Meters of Wire Laid</p>
              <h1 className=" text-7xl font-bold
              sm1:text-4xl md:text-5xl
              ">10,000 m+</h1>
            </div>

            <div className=" w-[2px] bg-[var(--darkGrey)]"></div>


          {/* STAT 3 */}
          <div className=" flex flex-col justify-center items-center text-sm
          md:text-xl
          ">
              <p>Switches Installed</p>
              <h1 className=" text-7xl font-bold
              sm1:text-4xl md:text-5xl
              ">1000+</h1>
            </div>

        </div>
      </div>





















      {/* WHY CHOOSE US */}
      <div className=" flex justify-between 
        sm1:py-10 sm1:mb-[6rem]
        ">



          {/* WHY CHOOSE US SECTION HEADING */}
          <div id="whyChooseUs" className="
          sm1:w-[28rem] sm1:mr-[2rem]
          ">
            <h1 className=" text-4xl font-bold mb-2
            md:text-5xl">Why Choose Us</h1>
            <p className=" text-sm
            md:text-lg">Our approach is simple—become a partner in our clients' challenges and work together to create sustainable, long-term solutions. With LaseTek, you’re not just choosing a service provider; you’re gaining a dedicated partner committed to helping you succeed.</p>
          </div>


          {/* THE LINE THAT DIVIDES */}
          <div className=" flex">
            <div className=" bg-[var(--darkGrey)] w-[1px]"></div>


          {/* ALL THE CARDS IN DIV COLUMN */}
          <div className=" flex flex-col items-start md:ml-8">


            {/* CARD 1 */}
            <div id="whyChooseUsCard1" className=" bg-white">
            <WhyChooseUsSectionV2
            heading = "Tailored Solutions"
            text = "We understand that every business is unique. That’s why we offer customized networking and security solutions designed to meet your specific needs."
            img = {whyChooseUsimg1}
            />
           {/* <LineBreakV2/> */}
           </div>



           {/* CARD 2 */}
           <div id="whyChooseUsCard2" className=" bg-white z-[2] h-[12rem] flex flex-col justify-center items-center">
           <WhyChooseUsSectionV2
            heading = "Commitment to Excellence"
            text = "As an MSME-certified company, we are dedicated to delivering top-quality services with a focus on precision, innovation, and timely completion of projects."
            img = {whyChooseUsimg2}
            />
           {/* <LineBreakV2/> */}
           </div>




           {/* CARD 3 */}
           <div id="whyChooseUsCard3" className=" bg-white z-[2] h-[12rem] flex flex-col justify-center items-center">
           <WhyChooseUsSectionV2
            heading = "Trusted by Industry Leaders"
            text = "Our strong partnerships with clients like Tata Steel Ltd and global technology providers like Cisco, Fortigate, R&M, and Hikvision reflect the trust placed in our services."
            img = {whyChooseUsimg3}
            />
           {/* <LineBreakV2/> */}
           </div>



           {/* CARD 4 */}
           <div id="whyChooseUsCard4" className=" bg-white z-[2] h-[12rem] flex flex-col justify-center items-center">
           <WhyChooseUsSectionV2
            heading = "Proven Expertise"
            text = "Our team has successfully delivered 100+ projects across various industries, ensuring quality and reliability at every step."
            img = {whyChooseUsimg4}
            />
           </div>
           



           
          </div>
          </div>


        </div>















      {/* ===================== MAIN 2 ============== END */}
      </div>

      </div>


      {/* ===================== MAIN 1 ============== END*/}
    </div>
  )
}







