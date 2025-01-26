// IMPORTING IMAGES
import heroSectionImg1 from "../assets/Version2/HeroSection1.png"
import heroSectionImg2 from "../assets/Version2/HeroSection3.png"
import heroSectionImg3 from "../assets/Version2/HeroSection2.png"




export const HomePage = () => {











  return (
    
    // ============= MAIN 1 =============== START
    <div className=" flex justify-center bg-black">

        {/* =============== MAIN 2 ============= START*/}
        <div className=" flex flex-col bg-white max-[1760px] w-[100%]
        sm1:px-8">
      



          {/* HERO SECTION  */}
            <div className="flex flex-col py-10 relative h-[30rem]">


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


      {/* ABOUT US */}


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


