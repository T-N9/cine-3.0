import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

/* Icons */
import { PhotoTwoTone } from "@mui/icons-material";

const Hook = (media_type, id) => {
  let url = `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=68d49bbc8d40fff0d6cafaa7bfd48072&language=en-US`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  let recommend, recommendList;
  let route_type = media_type === "tv" ? "series" : "movies";

  if (data) {
    if (data?.results.length >= 10) {
      recommend = data?.results.slice(0, 8);
    } else {
      recommend = data?.results;
    }

    recommendList = recommend?.map((item) => {
      return (
        <div
          key={item.id}
          className="min-w-[240px] cursor-pointer lg:min-w-[280px] select-none p-2 bg-wah rounded cus-box-shadow"
        >
          <Link href={`/${route_type}/${item.id}`}>
            <div>
              {item.backdrop_path ? (
                <div className="relative w-[225px] min-h-[126.6px] lg:w-[263px] lg:min-h-[148.4px] rounded mb-3 overflow-hidden">
                  <Image
                    layout="fill"
                    quality='10'
                    className=""
                    src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${item.backdrop_path}`}
                    alt={item.name}
                  />
                </div>
              ) : (
                <div className="w-[225px] min-h-[126.6px] lg:w-[263px] lg:min-h-[148.4px] rounded mb-3 text-primary flex justify-center items-center">
                  <PhotoTwoTone />
                </div>
              )}

              <div className="flex justify-between ">
                <h1 className="whitespace-nowrap text-black font-special text-lg m-0 overflow-hidden overflow-ellipsis pr-3 max-w-[200px]">
                  {item.title ? item.title : item.name}
                </h1>
                <h1 className="border text-primary border-solid border-primary p-1 text-sm">
                  {item.vote_average.toFixed(1)}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      );
    });

    if (recommend.length === 0) {
      recommendList = null;
    }
  }

  return {
    data,
    error,
    recommendList,
  };
};

export default Hook;
