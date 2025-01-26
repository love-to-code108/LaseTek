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
            <div className="flex flex-col py-10 relative h-[30rem]
            sm1:mb-[3rem]">


              {/* HERO SECTION WRITING WRAPPER */}
              <div className=" w-[32rem]">

                {/* PRECISION IN NETWORKING */}
                  <h1 className=" text-5xl font-bold">Precision In <span>Networking</span></h1>
                    
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



      {/* NETWORKING SERVICES */}




      {/* CCTV SERVICES */}



      {/* OUR ACHIEVEMENTS  */}




      {/* WHY CHOOSE US */}



      {/* ===================== MAIN 2 ============== END */}
      </div>


      {/* ===================== MAIN 1 ============== END*/}
    </div>
  )
}


