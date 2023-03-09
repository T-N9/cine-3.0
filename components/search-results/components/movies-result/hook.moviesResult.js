import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import { setMovieQty } from '../../../../modules/reducer.searchCategory';

/* Action */
import { getSearchQueryResult } from "../../../../intensions";

const Hook = (query, pageNo) => {

  const currentPage = parseInt(pageNo)
  // console.log({pageNo, currentPage})
  const [currentPageNo, setCurrentPageNo] = useState(currentPage);

  const dispatch = useDispatch();

  const { data, error, isLoading } = getSearchQueryResult({
    type: "movie",
    query,
    pageNo,
  });

  useEffect(() => {
    pageNo && setCurrentPageNo(currentPage)
  }, [pageNo])

  useEffect(() => {
    if(data) {
        dispatch(setMovieQty(data?.total_results))
    }
  }, [data])

  const total_pages = data?.total_pages;

  const pageClick = (page) => {
    setCurrentPageNo(page);
  };

  const goToBackPage = () => {
    setCurrentPageNo((prev) => prev - 1);
  };

  const goToNextPage = () => {
    setCurrentPageNo((prev) => prev + 1);
  };

  return {
    data,
    error,
    isLoading,
    currentPageNo,
    total_pages,

    /* actions */
    setCurrentPageNo,
    pageClick,
    goToBackPage,
    goToNextPage
  };
};

export default Hook;
