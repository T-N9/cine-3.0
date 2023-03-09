import React from "react";
import Link from "next/link";

/* Components */
import { SearchHeader } from "../common";
import Content from "./components/Content";

/* Constants */
import { seriesCategoryList } from "../../constants/common";

/* Hook */
import Hook from "./hook.seriesCategory";

const SeriesCategory = () => {
  const {
    activeCategory,
    currentCategory,
    data,
    error,
    currentData,

    setActiveCategory,
    setPageNo,
    setCurrentData,
  } = Hook();

  console.log({ currentData });

  return (
    <>
      <SearchHeader query="" />

      <div className="flex relative flex-col justify-evenly lg:flex-row container_x_md py-5">
        <div className="max-w-full mb-6 h-auto self-start sticky top-20 flex-2 lg:max-w-[248px]">
          <div className="flex overflow-y-auto pb-3 flex-nowrap lg:flex-wrap gap-2">
            {seriesCategoryList?.map((category, index) => {
              return (
                <Link
                  key={category.title}
                  href={`/discover/series/${category.title}`}
                >
                  <div
                    onClick={() => {
                      setPageNo(1);
                    }}
                    className={`text-wah cursor-pointer border border-solid border-light rounded-full lg:px-2 lg:py-1 min-w-[6rem] text-sm p-1 flex justify-center items-center font-bold ${
                      currentCategory === category.title && "bg-primary"
                    }`}
                  >
                    <p className="capitalize mb-0">{category.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Content
          currentCategory={currentCategory}
          setActiveCategory={setActiveCategory}
          data={data}
          error={error}
          currentData={currentData}
          setPageNo={setPageNo}
        />
      </div>
    </>
  );
};

export default SeriesCategory;
