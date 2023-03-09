import {useState,  useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { getUpcomingMoviesPaginate } from '../../intensions';

import { activeNavItem } from "../../modules/reducer.nav";

/* Constant */
import { navItems } from "../../constants/uiData";

const Hook = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const pageNo = parseInt(router.query["pageNo"]);
    const [ currentPage, setCurrentPage ] = useState(pageNo);

    const { gump_data, gump_loading, gump_error } = getUpcomingMoviesPaginate(pageNo);

    let total_pages = gump_data?.total_pages;

    useEffect(() => {
        dispatch(activeNavItem(navItems[1]));
      }, []);

    const pageClick =(page) => {
        setCurrentPage(page)
    }

    const goToBackPage = () => {
        setCurrentPage( prev => prev-1)
    }

    const goToNextPage = () => {
        setCurrentPage( prev => prev+1)
    }

    return {
        gump_data,
        gump_loading,
        gump_error,
        pageNo,
        total_pages,

        /* actions */
        pageClick,
        goToBackPage,
        goToNextPage

    }
}

export default Hook;
