import React from 'react';
import Progress from './Progress';

function Question ({ele , changeIndex })  {
 
  return (
    <div className='flex flex-col justify-between items-center gap-20 mt-16 '>
          <h3 className='text-red-600 text-2xl'>{ele.index + 1}/20</h3>
          <p className='text-2xl'>{ele.question}</p>
            <Progress changeIndex= {changeIndex} index={ele.index} />
    </div>
  );
};

export default Question;