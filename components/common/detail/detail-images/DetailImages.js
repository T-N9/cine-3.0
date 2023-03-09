import React from "react";

/* Hook */
import Hook from "./hook.detailImages";

/* Icons */
import { ArrowCircleRight } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const DetailImages = ({ media_type, id }) => {
  const { data, error, backdropsList, view_more } = Hook(media_type, id);

  return (
    <section>
      <h1 className="title-2 text-wah mb-5">Related Media</h1>

      {!data ? (
        <div className="h-[200px] flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="w-full overflow-auto inline-flex gap-x-1 rounded mb-[20px] bg-black backdrop-opacity-50">
          {backdropsList === null ? (
            <div>
              <h1>No Items available.</h1>
            </div>
          ) : (
            backdropsList
          )}
          {view_more === true && (
            <div className="min-w-[200px] lg:min-w-[350px] text-wah flex justify-center items-center border border-light border-solid">
              <p className="mr-3 mb-0">View More</p>

              <ArrowCircleRight />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default DetailImages;
