import React from "react";

/* Components */
import SearchResultCard from "../../common/cards/SearchResultCard";

/* Icons */
import { CircularProgress } from "@mui/material";

const Content = ({
  currentCategory,
  data,
  error,
  currentData,

  setActiveCategory,
  setPageNo,
}) => {
  return (
    <>
      <div className="flex-8 min-w-full lg:min-w-[878px] min-h-full">
        <div className="mb-7 block lg:hidden">
          <h1 className="capitalize text-xl text-wah  text-center font-special">
            Latest {currentCategory} movies
          </h1>
        </div>
        {/* {data && ( */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-8">
            {currentData.map((item, index) => {
              return (
                <div key={item.id} className="flex justify-center items-center">
                  <SearchResultCard
                    id={item.id}
                    title={item.title}
                    image={item.poster_path}
                    name={item.name}
                  />
                </div>
              );
            })}
          </div>
        {/* )  */}
        {/* // : (
        //   <div className="h-[300px] flex justify-center items-center">
        //     <CircularProgress />
        //   </div> */}
        {/* } */}

        <div className="my-5">
          <button className="flex justify-center items-center w-full py-3 bg-primary rounded-md text-wah font-bold" onClick={() => setPageNo((prev) => prev + 1)}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Content;
