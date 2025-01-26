// IMPORTING IMAGES
import heroSectionImg1 from "../assets/Version2/HeroSection1.png"
import heroSectionImg2 from "../assets/Version2/HeroSection3.png"
import heroSectionImg3 from "../assets/Version2/HeroSection2.png"
// QUOTE SECTION 
import doubleQuotesImg from "../assets/Version2/dobuleQuotes.svg"
// ABOUT US SECTION
import aboutUsSectionImg from "../assets/Version2/aboutUsSectionImg.png"




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
        <div className=" flex justify-between">



          {/* NETWORKING SERVICE HEADING */}
          <div>
            <h1>Networking Services</h1>
          </div>


          {/* THE LINE THAT DIVIDES */}
            <div className=" bg-[var(--darkGrey)] w-[1px]"></div>


          {/* ALL THE CARDS IN DIV COLUMN */}
          <div className=" flex flex-col ">

          </div>


        </div>







      {/* CCTV SERVICES */}



      {/* OUR ACHIEVEMENTS  */}




      {/* WHY CHOOSE US */}



      {/* ===================== MAIN 2 ============== END */}
      </div>


      {/* ===================== MAIN 1 ============== END*/}
    </div>
  )
}


