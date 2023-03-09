import React from "react";
import Link from "next/link";

/* Hook */
import Hook from "./hook.searchAside";

const SearchAside = ({
  query
}) => {
  const { searchResultCategories, active /* actions */, handleActiveCategory } =
    Hook();

  const categoryList = searchResultCategories.map((cate, index) => {
    return (
      <Link key={index} href={`/search/${query}/1`}>
        <div
          onClick={() => handleActiveCategory(cate.name)}
          className={`text-white cursor-pointer flex justify-between items-center gap-x-2 py-2 px-3 border border-primary rounded border-solid ${
            active === cate.name && "bg-gray bg-opacity-30"
          }`}
          
        >
          <p className="capitalize">{cate.name}</p>
        
          <span className="px-1 py-0 text-sm font-extrabold rounded bg-secondary">
            {cate.qty}
          </span>
        </div>
      </Link>
    );
  });

  return (
    <aside className="flex-1 px-4">
      <div className="py-5 flex gap-2 flex-row lg:flex-col">{categoryList}</div>
    </aside>
  );
};

export default SearchAside;
