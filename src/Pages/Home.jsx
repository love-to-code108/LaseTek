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
import { LineBreakV2 } from "../components/LineBreakV2"




export const HomePage = () => {











  return (
    
    // ============= MAIN 1 =============== START
    <div className=" flex justify-center bg-black">

        {/* =============== MAIN 2 ============= START*/}
        <div className=" flex flex-col bg-white max-[1760px] w-[100%]
        sm1:px-8">
      











          {/* HERO SECTION  */}
            <div className="flex flex-col relative h-[30rem]
            sm1:mb-[3rem] sm1:py-10">


              {/* HERO SECTION WRITING WRAPPER */}
              <div className=" w-[32rem]">

                {/* PRECISION IN NETWORKING */}
                  <h1 className=" text-5xl font-bold">Precision In <span  className=" text-[var(--red)]">Networking</span></h1>
                    
                {/* EXCELLENCE IN SECURITY */}
                <h1 className=" text-5xl font-bold mb-2">Excellence in Security</h1>

                {/* PARAGRAPH */}
                <p className=" w-[30rem] text-base">Building lasting partnerships through integrity, innovation, and unmatched service— <span className=" text-[var(--red)]">trusted by industry leaders like Tata Steel</span> and powered by global technology brands</p>
                  

              </div>


                {/* HERO SECTION IMAGES WRAPPER */}
                <div className=" flex items-end w-[100%] justify-between">


                  {/* IMAGE 1 */}
                  <img className=" absolute bottom-0 left-0 
                  sm1:h-auto sm1:w-[40%]" 
                  src={heroSectionImg1} alt="" />



                  {/* IMAGE 2 */}
                  <img className="absolute bottom-0 object-cover
                  sm1:left-[43%] sm1:w-[16rem] sm1:h-[16rem]"

                    src={heroSectionImg2} alt="" />



                  {/* IMAGE 3 */}
                  <img className="absolute bottom-0 right-0 object-cover 
                  sm1:w-[27%] sm1:h-[27rem] "

                   src={heroSectionImg3} alt="" />
                </div>

            </div>













      {/* THE QUOTE */}
          <div className=" flex justify-center items-center bg-[var(--lastekBlue)]
          sm1:py-10 sm1:mb-[1rem] relative
          ">

            


            {/* THE QUOTE */}
            <div className=" text-4xl text-white">
              <p>Where Vision Meets Aspiration</p>
            </div>


            {/* QUOTE IMG 1 */}
            <div>
                <img className=" absolute 
                sm1:w-[5rem] bottom-0 right-[6rem]
                "
                 src={doubleQuotesImg} alt="" />
            </div>



          </div>














      {/* ABOUT US */}
        <div className=" flex flex-col
        sm1:py-10">

          {/* HEADING */}
          <div className="  font-bold 
          sm1:text-5xl sm1:mb-2
          ">
            <h1>About Us</h1>
          </div>

          {/* PARAGRAPH */}
          <div className=" 
          sm1:text-base sm1:w-[35rem] mb-6">
            <p>At the heart of LaseTek are our core values integrity, honesty, innovation, and respect for people. We believe that true success lies not only in providing exceptional products and services as a Network Service Provider but also in fostering public trust and conducting ourselves as responsible corporate citizens. Our approach is simple becoming a partner, in our client's challenges and working together to create sustainable, long-term solutions. With LaseTek, you’re not just choosing a service provider you’re gaining a dedicated partner committed to helping you succeed.</p>
          </div>


          {/* IMAGE */}
          <div className=" w-[100%] flex justify-end">
            <img className=" 
            sm1:w-[35rem]" src={aboutUsSectionImg} alt="" />
          </div>

        </div>

















      {/* SERVICES WE PROVIDE */}
      <div className=" flex flex-col
      sm1:py-10">
        

        {/* SERVICES SECTION WRITING SUPER BOX */}
        <div className="sm1:w-[50rem] sm3:w-[55rem] ">
            {/* HEADING */}
            <h1 className=" md:text-5xl font-bold mb-4
            sm3:text-4xl
            text-5xl">
              <span className="">Services</span> We Provide
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

      </div>
















      {/* NETWORKING SERVICES */}
        <div className=" flex justify-between 
        sm1:py-10 sm1:mb-[4rem]
        ">



          {/* NETWORKING SERVICE HEADING */}
          <div className=" text-4xl font-bold">
            <h1>Networking Services</h1>
          </div>


          {/* THE LINE THAT DIVIDES */}
          <div className=" flex">
            <div className=" bg-[var(--darkGrey)] w-[1px]"></div>


          {/* ALL THE CARDS IN DIV COLUMN */}
          <div className=" flex flex-col items-start">


            {/* CARD 1 */}
            <ServicesWeProvideCardV2 
            heading = "Network Design and Consultant"
            para = "At LaseTek, we design tailored network solutions that ensure seamless connectivity, reliability, and scalability. Our consultation services focus on understanding your unique needs, providing expert guidance to build networks that support your growth. Whether upgrading an existing system or starting from scratch, we’re here to simplify the process and keep you connected."
            img = {servicesWeProvideImg1} />
           <LineBreakV2/>



           {/* CARD 2 */}
           <ServicesWeProvideCardV2 
           heading = "Network Installation and Configuration"

           para = "Setting up a network doesn’t have to be complicated. At LaseTek, we specialize in professional installation and configuration of network systems tailored to your needs. From connecting devices to ensuring optimal performance, we handle everything with precision and care. Let us simplify the process so you can focus on what matters most—your business"
           img = {servicesWeProvideImg2}
           
           />
           <LineBreakV2/>




           {/* CARD 3 */}
           <ServicesWeProvideCardV2 
           heading = "Network Optimization and Device Integration"
           para = "At LaseTek, we ensure your network runs at peak performance by optimizing every connection and integrating devices seamlessly. Our solutions are designed to enhance speed, reliability, and efficiency, making your systems work smarter together. Let us help you get the most out of your network."
           img = {servicesWeProvideImg3}
           
           />
           
          </div>
          </div>


        </div>













      {/* CCTV SERVICES */}
      <div className=" flex justify-between 
        sm1:py-10
        ">



          {/* NETWORKING SERVICE HEADING */}
          <div className=" text-4xl font-bold
          sm1:w-[20rem]
          ">
            <h1>CCTV Services</h1>
          </div>


          {/* THE LINE THAT DIVIDES */}
          <div className=" flex">
            <div className=" bg-[var(--darkGrey)] w-[1px]"></div>


          {/* ALL THE CARDS IN DIV COLUMN */}
          <div className=" flex flex-col items-start">


            {/* CARD 1 */}
            <ServicesWeProvideCardV2 
            heading = "CCTV System Design and Planning"
            para = "Effective CCTV System Design and Planning is the foundation of robust security. At LaseTek, we assess your unique requirements, analyze the layout, and craft tailored solutions to ensure optimal coverage. Our detailed planning ensures no blind spots, seamless integration with existing systems, and scalability for future needs, delivering a security framework you can trust."
            img = {cctvImg1} />
           <LineBreakV2/>



           {/* CARD 2 */}
           <ServicesWeProvideCardV2 
           heading = "CCTV Installation and Setup"

           para = "Seamless CCTV Installation and Setup is key to reliable surveillance. At LaseTek, we handle everything from mounting cameras to setting up NVRs and wiring with precision. Our team ensures every component is securely installed and perfectly positioned, guaranteeing comprehensive coverage and immediate functionality for your peace of mind."
           img = {cctvImg2}
           
           />
           <LineBreakV2/>




           {/* CARD 3 */}
           <ServicesWeProvideCardV2 
           heading = "CCTV Configuration and Management"
           para = "Proper CCTV Configuration and Management are essential for maximizing system performance. At LaseTek, we fine-tune your cameras, NVRs, and related equipment to ensure optimal functionality. From customizing settings to managing system updates, we provide ongoing support to keep your surveillance system running smoothly and securely."
           img = {cctvImg3}
           
           />
           



           
          </div>
          </div>


        </div>



      {/* OUR ACHIEVEMENTS  */}




      {/* WHY CHOOSE US */}



      {/* ===================== MAIN 2 ============== END */}
      </div>


      {/* ===================== MAIN 1 ============== END*/}
    </div>
  )
}







