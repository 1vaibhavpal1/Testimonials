import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Card(props){
    let review = props.review
    return(
        <div className="flex flex-col justify-center items-center relative mt-12">
            <div className="mt-4 absolute left-0 top-[-11rem]">
                <img className="w-[140px] h-[140px] rounded-full absolute z-20" src={review.image}></img>
                <div className="w-[140px] h-[140px] rounded-full relative bottom-2 left-2 bg-violet z-10"></div>
            </div>
            <h2 className="text-2xl font-bold tracking-wide">{review.name}</h2>
            <p className="opacity-50 text-violet uppercase text-sm leading-7">{review.job}</p>
 
            <FaQuoteLeft className="text-violet mt-4 mb-4"/>
            <p className="text-slate-500 text-center">{review.text}</p>
            <FaQuoteRight className="text-violet mt-2"/>

        </div>
    )

}
export default Card;