


export const ServicesWeProvideCardV2 = (props) => {



  return (
    <div className="flex pt-2
    sm1:ml-[3rem] sm1:mb-12 
    ">


        {/* TEXT BOX */}
        <div className=" flex flex-col 
        sm1:w-[20rem]
        ">
        
            {/* HEADING */}
            <h1 className=" text-2xl font-bold
            sm1:mb-6
            ">{props.heading}</h1>

            {/* THE PARAGRAPH */}
            <p className="
            sm1:text-sm
            ">{props.para}</p>


        </div>


        {/* THE IMAGE */}
        <div className=" drop-shadow-xl 
        sm1:ml-[2rem]
        ">
            <img className=" object-cover rounded-[4px]
             sm1:w-[14rem] sm1:h-[18rem] 
            " src={props.img} alt="" />
        </div>

    </div>
  )
}
