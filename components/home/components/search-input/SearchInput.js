import React from "react";

/* Hook */
import Hook from "./hook.searchInput";

/* Components */
import { TextField } from "@mui/material";

const SearchInput = () => {
  const {
    formValue,

    /* Actions */
    setFormValue,
    enterHandler,
    changeHandler,
  } = Hook();

  return (
    <section className="py-12 bg-gradient-to-r from-secondary to-primary">
      <div className="container_x_md">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-4/5 lg:w-1/2 flex gap-y-3 flex-col">
            <h1 className="text-white font-bold">Explore Now</h1>
            <form onSubmit={enterHandler}>
              <TextField
                fullWidth
                label="Search for movies, series and celebrities"
                id="fullWidth"
                autoComplete="off"
                value={formValue}
                variant="outlined"
                onChange={changeHandler}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
