import React from "react";

/* Hook */
import Hook from "./hook.seriesResult";

/* Components */
import { CircularProgress } from "@mui/material";
import SearchResultCard from "../../../common/cards/SearchResultCard";
import { Pagination } from "../../../common";

const SeriesResult = ({ active, query, page }) => {
  const {
    data,
    error,
    isLoading,
    currentPageNo,
    total_pages,

    /* actions */
    setCurrentPageNo,
    pageClick,
    goToBackPage,
    goToNextPage,
  } = Hook(query, page);

  const seriesResultList = data?.results?.map((series, index) => {
    return (
      <div key={index}>
        <SearchResultCard
          id={series.id}
          title={series.title}
          image={series.poster_path}
          name={series.name}
          isSeries={true}
        />
      </div>
    );
  });
  return (
    <>
      {isLoading && (
        <div className="h-[400px] w-full flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
      {data && (
        <section
          className={`flex-[7] transition-all ${
            active === "series"
              ? "opacity-100 visible translate-x-0 delay-300"
              : "opacity-0 invisible -translate-x-5 h-0"
          }`}
        >
          <div className="container_x_md py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 lg:gap-x-0">
              {seriesResultList}
            </div>

            <Pagination
              page={currentPageNo}
              pageClick={pageClick}
              goToBackPage={goToBackPage}
              goToNextPage={goToNextPage}
              totalPages={total_pages}
              query={query}
              type="search"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default SeriesResult;
