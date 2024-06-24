import React, { useEffect, useState } from 'react';
import Category from './Category';
import Question from './Question';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function Container ()  {
  const data = [{question : "I have ambitious aims of making a difference." , index : 0},
    {question : "My leadership journey has progressed as I anticipated." , index : 1} ,
    {question : "I have spent fewer than 4 years in full time service or ministry." , index : 2} ,
    {question : "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way." , index : 3} ];

    const [index , setIndex] = useState(0);
    const [element , setElement] = useState(null);

    const incrementIndex = () =>{
      if(index < data.length)
      {
        setIndex(index + 1);
        const filteredElement = data.find((ele) => ele.index === index);
        setElement(filteredElement);
      }
      console.log(index);
    }
    const decrementIndex = () =>{
      if(index > 0)
      {
        setIndex(index - 1);
        const filteredElement = data.find((ele) => ele.index === index);
        setElement(filteredElement);
      }
      console.log(index);
    }

    const changeIndex = (index) => {
      setIndex(index) 
    }

    useEffect(()=>{
      const filteredElement = data.find((ele) => ele.index === index);
        setElement(filteredElement);
 } , [index])

  return (
    <div className='w-full h-[87%] bg-[#8fcbd3] flex  justify-center items-center'>
        <div className='w-[70%] bg-zinc-100 h-[80%] rounded-lg flex flex-col justify-between'>
          <div className='dataContainer w-full h-[70%]'>
            <Category/>
              {element != null &&  <Question ele = {element} changeIndex ={changeIndex}/>}
          </div>
            <div className='button flex justify-between p-12 text-xl font-medium '>
              <div onClick={decrementIndex} className='flex justify-center items-center gap-3 px-2 py-1 rounded-lg previous border-2 border-zinc-700 cursor-pointer'><FaLongArrowAltLeft/> Prev</div>
              <div onClick={incrementIndex} className=' cursor-pointer flex justify-center items-center gap-3 px-2 py-1 next rounded-lg border-2 border-zinc-700' >
                <FaLongArrowAltRight/> Next
              </div>
            </div>
        </div>
    </div>
  );
};

export default Container;