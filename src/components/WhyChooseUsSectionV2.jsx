


export const WhyChooseUsSectionV2 = (props) => {
  return (
    <div className=" flex justify-center items-center
    sm1:w-[30rem] sm1:mb-12 sm1:pl-6
    md:mr-8
    ">
        {/* IMAGE */}
        <div className=" w-[5rem]
        md:w-[6rem]
        ">
            <img src={props.img} alt="" />
        </div>


        {/* TEXT BOX */}
            <div className=" 
            sm1:w-[20rem] sm1:ml-5
            ">



                {/* HEADING */}
                <h1 className=" font-bold
                sm1:text-xl sm1:mb-2 
                md:text-2xl 
                ">{props.heading}</h1>


                {/* PARAGRAPH */}
                <p className="
                sm1:text-sm
                md:text-base
                ">{props.text}</p>

            </div>
    </div>
  )
}
