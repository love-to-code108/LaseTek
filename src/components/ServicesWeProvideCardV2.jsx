


export const ServicesWeProvideCardV2 = (props) => {



  return (
    <div id={props.ids} style={{zIndex:`${props.z}`}} className="flex pt-2 bg-white
    sm1:ml-[3rem] sm1:mb-12 
    ">


        {/* TEXT BOX */}
        <div className=" flex flex-col 
        sm1:w-[20rem]
        ">
        
            {/* HEADING */}
            <h1 className=" text-2xl font-bold
            sm1:mb-6
            md:text-3xl
            ">{props.heading}</h1>

            {/* THE PARAGRAPH */}
            <p className="
            sm1:text-sm
            md:text-base
            ">{props.para}</p>


        </div>


        {/* THE IMAGE */}
        <div className=" drop-shadow-xl 
        sm1:ml-[2rem]
        ">
            <img className=" object-cover rounded-[4px]
             sm1:w-[14rem] sm1:h-[18rem] 
             md:w-[15rem] md:h-[20rem]
            " src={props.img} alt="" />
        </div>

    </div>
  )
}
