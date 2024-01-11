import React, { useState } from "react";
import Card from "./Card";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";


function Testimonials(props){
    let reviews = props.reviews //array of objects
    const [index,setIndex] = useState(0);
    function leftClickHandler(){
        if(index === 0){
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1);
        }
    }
    function rightClickHandler(){
        if(index === reviews.length-1){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }

    }
    function SupriseHandler(){
        let randIndex = Math.floor(Math.random()*reviews.length)
        setIndex(randIndex)
    }

    return(
        <div className="p-10 flex flex-col justify-center items-center bg-white w-[700px] rounded-md shadow-sm hover:shadow-md transition-all duration-700 mt-10">
            <Card review={reviews[index]}></Card>
            
            <div className="mt-8">
                <button onClick={leftClickHandler}><GoChevronLeft className="text-violet text-3xl mr-3" /></button>
                <button onClick={rightClickHandler}><GoChevronRight className="text-violet text-3xl "/></button>
            </div>
            <div className="bg-violet py-2 px-10 rounded-md mt-4">
                <button onClick={SupriseHandler} className="text-lg text-white font-bold">Suprise Me</button>
            </div>

        </div>
    )


}
export default Testimonials;