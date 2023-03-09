import React , { useState } from 'react';

/* Components */
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PopularMovies from './components/PopularMovies';
import PopularSeries from './components/PopularSeries';

const PopularNow = ({
    moviesData ,
    moviesLoading ,
    moviesError ,

    seriesData ,
    seriesLoading ,
    seriesError ,
}) => {

    const [tab, setTab] = useState('movies');

    const handleChange = (e, newTab) => {
        if(newTab !== null) {
            setTab(newTab)
        }
    };

    return (
        <section className='text-white bg-popular-bg-sm md:bg-popular-bg-lg bg-popular'>
            <div className='container_x_md py-12'>
                <h1 className='title-2 mb-5'>
                    Popular Now
                </h1>
                <ToggleButtonGroup
                    color="primary"
                    value={tab}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton className="toggle-btn" value="movies">Movies</ToggleButton>
                    <ToggleButton className="toggle-btn" value="series">Series</ToggleButton>
                </ToggleButtonGroup>

                <div className='mt-2'>
                    <div className='popular-now-wrapper min-h-[25rem] relative '>
                        <div className={`${tab === 'movies' ? 'slide_is_showed' : 'slide_is_hidden'} w-full h-full`}>
                            <PopularMovies
                                data = {moviesData}
                                loading = {moviesLoading}
                                error = {moviesError}
                            />
                        </div>
                        <div className={`${tab === 'series' ? 'slide_is_showed' : 'slide_is_hidden'} w-full h-full`}>
                            <PopularSeries
                                data = {seriesData}
                                loading = {seriesLoading}
                                error = {seriesError}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularNow;
