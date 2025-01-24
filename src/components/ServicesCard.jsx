import "../index.css"

export const ServicesCard = (props) => {



  return (
    <div className=" flex flex-col items-center xl:w-[469px] md:min-h-[588px] px-6 py-6 border-2 border-black shadow-lg
    lg:w-[420px]
    md:w-[370px]
    sm3:w-[350px]
    sm2:w-[330px]
    sm1:w-[300px]
     rounded-[0.6rem]">

      {/* IMAGE */}
      <div className=" mb-2 md:mb-8 ">
        <img className=" rounded-[0.6rem]" src={props.img} alt="" />
      </div>



      {/* THE HEADING */}
      <div className=" mb-2 w-[100%]">
        <h1 className="text-xl md:text-3xl font-bold">{props.heading}</h1>
      </div>



      {/* THE TEXT */}
      <div className="">
        <p className="text-base md:text-xl">{props.text}</p>
      </div>

    </div>
  )
}
