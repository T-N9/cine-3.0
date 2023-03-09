import React from "react";

/* Hook */
import Hook from "./hook.upcomingPaginate";

/* Components */
import { CircularProgress } from "@mui/material";
import UpcomingItem from "../home/components/upcoming-movies/UpcomingItem";
import Pagination from "../common/pagination";

const UpcomingAllPaginatePage = () => {
  const {
    gump_data,
    gump_error,
    gump_loading,
    pageNo /* actions */,
    total_pages,
    pageClick,
    goToBackPage,
    goToNextPage,
  } = Hook();

  const itemList = gump_data?.results?.map((item, index) => {
    return (
      <UpcomingItem
        key={index}
        id={item.id}
        title={item.title}
        poster_path={item.poster_path}
        overview={item.overview}
        release_date={item.release_date}
      />
    );
  });

  return (
    <>
      <section className="container_x_md py-5">
        {gump_loading && (
          <div className="h-[400px] w-full flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
        {gump_data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {itemList}
          </div>
        )}

        <Pagination
          page={pageNo}
          pageClick={pageClick}
          goToBackPage={goToBackPage}
          goToNextPage={goToNextPage}
          totalPages={total_pages}
          type="upcoming"
        />
      </section>
    </>
  );
};

export default UpcomingAllPaginatePage;
