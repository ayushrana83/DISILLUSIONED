import React, { useState } from 'react';

function Progress({changeIndex, index}) {
    const data = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Agree Strongly"];
    const [progress, setProgress] = useState(0);

    const handleClick = (e) => {
        const container = e.currentTarget.parentElement;
        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left; 
        const newProgress = ((clickX / rect.width) * 100) - 4.5;
        setProgress(newProgress);
        setTimeout(()=>{
            changeIndex(index + 1);
            setProgress(0);
        }, 2000)
    };

    return (
        <div className='progressbar w-full flex flex-col relative items-center justify-center gap-5'>
            <div className='straight_line h-1 w-[75%] absolute top-1 left-28 bg-gray-300'></div>
            <div className='straight_line h-1.5 absolute bg-blue-600 top-1 rounded-xl left-28 transition-all ease-in-out delay-200' style={{ width: `${progress}%`, maxWidth: '75%' }}></div>
            <div className='w-full flex justify-center absolute left-14 top-0 items-center gap-8'>
                {data.map((ele, index) => (
                    <div key={index} className='w-[16%] cursor-pointer' onClick={handleClick}>
                        <span className='h-3 w-3 bg-gray-600 block rounded-full'></span>
                        <h2 className='mt-5'>{ele}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Progress;
