


export const WhyChooseUsSectionV2 = (props) => {
  return (
    <div className=" flex justify-center items-center
    sm1:w-[30rem] sm1:mb-12 sm1:pl-6
    ">
        {/* IMAGE */}
        <div className=" w-[7rem]">
            <img src={props.img} alt="" />
        </div>


        {/* TEXT BOX */}
            <div className=" 
            sm1:w-[20rem] sm1:ml-5
            ">



                {/* HEADING */}
                <h1 className="
                sm1:text-2xl font-bold
                ">{props.heading}</h1>


                {/* PARAGRAPH */}
                <p className="
                sm1:text-base
                ">{props.text}</p>

            </div>
    </div>
  )
}
