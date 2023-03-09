import React from 'react';

/* Components */
import {SearchHeader} from '../common';
import MoviesResult from './components/movies-result/MoviesResult';
import SeriesResult from './components/series-result/SeriesResult';
import SearchAside from './components/search-aside/SearchAside';

/* Hook */
import Hook from './hook.searchResults';

const SearchResults = () => {

    const {
        searchQuery,
        pageNo,
        active
    } = Hook();
    
    return (
        <>
            <SearchHeader query={searchQuery}/>
            <section className='flex p-0 flex-col-reverse lg:flex-row-reverse lg:px-12'>
                <div className='flex-[7]'>
                    <MoviesResult active = {active} query={searchQuery} page={pageNo}/>
                    <SeriesResult active = {active} query={searchQuery} page={pageNo}/>
                </div>
                <SearchAside query = {searchQuery}/>
            </section>
        </>
    );
}

export default SearchResults;
