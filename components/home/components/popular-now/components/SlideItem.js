import React from "react";
import Link from "next/link";
import moment from "moment";

/* Hook */
import Hook from "./hook.slideItem";

const SlideItem = ({
  id,
  title,
  name,
  image,
  vote_avg,
  release_date,
  media_type,
}) => {
  const { vote_border, route_type, poster_path } = Hook(vote_avg, media_type);

  return (
    <div className="py-5">
      <div className="w-[200px] relative cursor-pointer select-none">
        <Link href={`${route_type}/${id}`} passHref={true} prefetch>
          <div>
            <img
              className="w-[200px] rounded-xl min-h[295px] mb-1 popular-now-shadow border-2 border-solid border-secondary "
              src={`${poster_path}/${image}`}
              alt={`${title ? title : name}'s poster`}
            />
            <div className="px-3 py-1">
              <h1 className="text-[18px]">{title ? title : name}</h1>
              <p className="text-sm my-1">
                {moment(release_date).format("D MMM, YYYY")}
              </p>
              <p
                style={{ borderColor: vote_border }}
                className="absolute -top-4 -right-4 w-10 h-10 border-2 border-solid rounded-full font-bold bg-dark flex justify-center items-center"
              >
                {vote_avg === 0 ? "NR" : vote_avg.toFixed(1)}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SlideItem;
