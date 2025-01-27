

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
// import image15 from "../assets/Gallery-Images/img15.jpg";
import image16 from "../assets/Gallery-Images/img16.jpg";
import image17 from "../assets/Gallery-Images/img17.jpg";


export const Gallery = () => {
  







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
      <div className="main-2 bg-white z-10 w-[100vw] max-w-[1500px] relative">




       








        {/* HEADING */}
        <div className=" py-10 md:py-20 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8
        px-8">
          <h1 className="  font-bold 
          sm1:text-6xl sm1:mb-2
          ">
            Gallery
          </h1>
          <p className="sm1:text-base w-[50rem]">Step into our journey through this gallery, where each image tells a story of trust, dedication, and innovation. From the projects we’ve proudly completed to the partnerships we deeply value, this is a glimpse of the work that inspires us every day.</p>
        </div>









        {/* ALL THE IMAGES */}
        <div
          className="py-5 2xl:px-10 3xl:px-20 relative 
        xl:px-8
        md:px-8
        px-8
        Gallery-masonry-style
        md:mb-[6rem]
        "
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
          {/* <img src={image15} alt="" className="Gallery-indivisual-styles"/> */}
          <img src={image16} alt="" className="Gallery-indivisual-styles"/>
          <img src={image17} alt="" className="Gallery-indivisual-styles"/>
        </div>










        






      </div>
      {/* END OF MAIN 2 */}
    </div>
    // END OF MAIN 1
  );
};
