import "../index.css";

export const WhyChooseUsCard = (props) => {
  return (
    <div className=" flex justify-center px-8 py-6 2xl:w-[753px] bg-white border-2 border-black shadow-lg rounded-[0.6rem]
    xl:w-[700px]
    lg:w-[660px]
    md:w-[610px]
    sm3:w-[560px]
    sm2:w-[510px]
    sm1:w-[465px]
    ">


      {/* THE IMAGE */}
      <div className=" flex justify-center items-center w-[18rem] mr-4">
        <img className=" 2xl:h-[100%] w-[auto] 
        
        " src={props.img} alt="" />
      </div>



      {/* WRITING SUPER BOX */}
      <div>
        {/* HEADING */}
            <div className="text-xl md:text-3xl font-bold text-[#383DAD]">
                <h1>{props.heading}</h1>
            </div>



        {/* TEXT */}
            <div className="text-base md:text-lg">
                <p>{props.text}</p>
            </div>


      </div>
    </div>
  );
};
