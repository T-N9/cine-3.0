import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

/* Constants */
import { movieCategoryList } from "../../constants/common";

const Hook = () => {
  const [pageNo, setPageNo] = useState(1);
  const [activeCategory, setActiveCategory] = useState("popular");

  const router = useRouter();
  let currentCategory = router.query["category"];

  let chosenCategory = movieCategoryList?.filter((item) => {
    return currentCategory === item.title;
  });

  let categoryUrl = `https://api.themoviedb.org/3/${chosenCategory[0]?.url}&page=${pageNo}`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(categoryUrl, fetcher);

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (data) {
      if (pageNo === 1) {
        setCurrentData(data?.results);
      } else {
        let pageData = currentData.concat(data?.results);
        setCurrentData(pageData);
      }
    }
  }, [data, pageNo]);

  return {
    activeCategory,
    currentCategory,
    data,
    error,
    currentData,

    /* actions */
    setActiveCategory,
    setPageNo,
    setCurrentData,
  };
};

export default Hook;
