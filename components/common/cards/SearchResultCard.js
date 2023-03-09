import React from "react";
import { useRouter } from "next/router";

/* Icons */
import { PhotoTwoTone } from "@mui/icons-material";

const SearchResultCard = ({ id, title, image, name, isSeries }) => {
  const router = useRouter();

  const handleDirectDetail = (id) => {
    if (isSeries) {
      router.push(`/series/${id}`);
    } else {
      router.push(`/movies/${id}`);
    }
  };
  return (
    <div
      onClick={() => handleDirectDetail(id)}
      className="w-[150px] m-auto cursor-pointer"
    >
      <div className="mb-[10px]">
        {image !== null ? (
          <img
            src={`https://www.themoviedb.org/t/p/w185/${image}`}
            alt={`${title} poster`}
            className="min-w-[150px]  cus-box-shadow min-h-[223px] max-h-[225px] object-cover rounded-md border-2 border-solid border-gray"
          />
        ) : (
          <div className="min-w-[150px]  cus-box-shadow min-h-[223px] max-h-[225px] object-cover rounded-md border-2 border-solid border-gray flex justify-center items-center text-primary bg-gray">
            <PhotoTwoTone />
          </div>
        )}
      </div>

      <div>
        <h1 className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis text-sm">
          {title ? title : name}
        </h1>
      </div>
    </div>
  );
};

export default SearchResultCard;
