import React from 'react';

/* Icons */
import { CancelSharp } from '@mui/icons-material';

const TheatreTrailer = ({
    trailer,
    showTrailer,
    handleTrailer
}) => {
    return (
        <div className={`absolute w-full h-full top-0 left-0 z-[2000] trailer-bg flex items-start justify-center flex-row-reverse ${showTrailer ? 'visible opacity-100':'invisible opacity-0'}`}>
            <button className='text-danger cursor-pointer bg-transparent absolute top-3 right-1' onClick={handleTrailer}>
            <CancelSharp/>
            </button>

            {
                trailer !== null ?
                <iframe className="w-full h-full trailer-bg" src={showTrailer ? `https://www.youtube.com/embed/${trailer}` : ``} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :
                <div className="w-full h-full flex justify-center items-center text-danger">
                    <h1>Trailer Not Found!</h1>
                </div>
            }
            
        </div>
    );
}

export default TheatreTrailer;
