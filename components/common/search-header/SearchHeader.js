import React from "react";

/* Components */
import { TextField } from "@mui/material";

/* Hook */
import Hook from "./hook.searchHeader";

const SearchHeader = ({
  query
}) => {
  const {
    formValue,
    displaySuggest,
    suggestData,
    holderValue,

    /* actions */
    setFormVal,
    handleEnterInput,
    handleOnChangeInput,
    handleSuggestion,
    setHolderValue
  } = Hook(query);

  return (
    <section className="search-header">
      <div className="container_x_md py-4">
        <div>
          <form onSubmit={handleEnterInput}>
            <TextField
              fullWidth
              label="Search for movies, series and celebrities"
              id="fullWidth"
              autoComplete="off"
              variant="filled"
              value={holderValue ? holderValue : ''}
              size="small"
              onChange={(e) => {
                setHolderValue(e.target.value)
                setTimeout(() => {
                  handleOnChangeInput(e);
                }, 1500);
              }}
            />

            {suggestData && (
              <div
                className={`absolute flex gap-y-1 flex-col z-[500] bg-white cus-box-shadow p-1 rounded ${
                  displaySuggest
                    ? "visible opacity-100"
                    : " invisible opacity-0"
                }`}
              >
                {suggestData.map((item, index) => {
                  return (
                    <div
                      className="rounded cursor-pointer text-secondary border-transparent border border-solid px-4 py-2 bg-wah transition-all hover:text-primary hover:border-primary hover:bg-wah"
                      key={index}
                      onClick={() => handleSuggestion(item)}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
