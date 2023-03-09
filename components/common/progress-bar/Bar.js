import React from 'react';

const Bar = ({animationDuration, progress}) => {
    return (
        <div className='bg-light h-1 w-full fixed left-0 top-0 z-[1000]' style={{ marginLeft : `${(-1 + progress) * 100}%`, transition : `margin-left ${animationDuration}ms linear`}}>

        </div>
    );
}

export default Bar;
