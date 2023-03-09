import React from "react";

/* Hook */
import Hook from "./hook.detailVideo";

/* Components */
import { ArrowCircleRight } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const DetailVideos = ({ media_type, id }) => {
  const { data, error, trailersList, view_more } = Hook(media_type, id);
  return (
    <>
      {!data ? (
        <div className="h-[200px] flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <section className="flex w-full overflow-y-auto rounded bg-black backdrop-opacity-50 gap-x-2">
          {trailersList === null ? (
            <div className="p-5">
              <h1 className="text-base text-warning m-0">
                No Items available.
              </h1>
            </div>
          ) : (
            trailersList
          )}
          {view_more === true && (
            <div className="border border-solid border-light bg-black min-w-[200px] h-[250px] text-wah flex justify-center items-center">
              <p className="mr-3">View More</p>

              <ArrowCircleRight />
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default DetailVideos;
