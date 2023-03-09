import React from "react";
import Link from "next/link";

/* Hook */
import Hook from "./hook.upcomingMovies";

/* Components */
import { CircularProgress } from "@mui/material";
import UpcomingItem from "./UpcomingItem";
import { Button } from "@mui/material";

const UpcomingMovies = ({ data, loading, error }) => {
  const {
    maxNum,
    usedDataList,

    /* actions */
    setMaxNum,
    handelMaxNum,
  } = Hook(data);

  let displayedList = usedDataList?.map((item) => {
    return (
      <UpcomingItem
        key={item.id}
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
      <section className="bg-upcoming">
        <div className="container_x_md py-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8 md:justify-between items-center">
            <h1 className="title-2 mb-5 text-white">Upcoming Movies</h1>

            <Link href="/upcoming/1">
              <div className="cursor-pointer">
                <p className="text-white border-0 border-solid border-b border-light font-bold">
                  View All
                </p>
              </div>
            </Link>
          </div>

          {loading && (
            <div className="h-[400px] w-full flex justify-center items-center">
              <CircularProgress />
            </div>
          )}

          {data && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                {displayedList}
              </div>

              {!(maxNum >= 20) ? (
                <Button
                  onClick={handelMaxNum}
                  className="border-primary text-primary capitalize table mx-auto"
                  variant="outlined"
                  size="small"
                >
                  View More
                </Button>
              ) : (
                <Link href="/upcoming">
                  <Button
                    className="border-primary text-primary capitalize table mx-auto"
                    variant="outlined"
                    size="small"
                  >
                    View All
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default UpcomingMovies;
