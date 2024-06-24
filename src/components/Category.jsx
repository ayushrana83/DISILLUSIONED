import React from 'react';

function Category ()  {
    const data = ["IDEALISTIC" , "DISILLUSIONED" , "CYNICAL" , "HOPEFUL"];
  return (
    <div className='w-[100%] flex justify-center text-xl items-center gap-5 mt-10'>
        {data.map((ele , index) => (
            <div key={index} className='w-[20%]  text-center'>
            <div  className='progress h-2 w-full origin-left bg-slate-400 rounded-lg '></div>
            <h2 className=' mt-2'>{ele}</h2> 
            </div> ))}
    </div>
  );
};

export default Category;