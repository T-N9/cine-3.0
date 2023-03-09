import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const Hook = (query) => {
  const [displaySuggest, setDisplaySuggest] = useState(false);
  const [formValue, setFormVal] = useState("");
  const [suggestData, setSuggestData] = useState(null);

  const [holderValue, setHolderValue] = useState(query);

  const router = useRouter();

  useEffect(() => {
    setHolderValue(query);
  }, [query]);

  let url;

  let searchValue = formValue.trim();
  if (searchValue.length === 0) {
    url = `https://api.themoviedb.org/3/search/multi?api_key=68d49bbc8d40fff0d6cafaa7bfd48072&query=demo`;
  } else {
    url = `https://api.themoviedb.org/3/search/multi?api_key=68d49bbc8d40fff0d6cafaa7bfd48072&query=${searchValue}`;
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    let suggestions = [];

    if (searchValue.length > 0 && data != null) {
      data?.results?.map((item) => {
        return item.title
          ? suggestions.push(item.title)
          : suggestions.push(item.name);
      });

      setSuggestData(suggestions.slice(0, 5));
    } else {
      setSuggestData(false);
    }
  }, [formValue, data]);

  const handleEnterInput = (e) => {
    e.preventDefault();
    let trimedVal = holderValue.trim();

    if (trimedVal.length !== 0) {
      router.push(`/search/${trimedVal}/1`);
      setDisplaySuggest(false);
    }
  };

  const handleOnChangeInput = (e) => {
    let value = e.target.value;

    setFormVal(value);
    setDisplaySuggest(true);
  };

  const handleSuggestion = (value) => {
    setFormVal(value);
    setDisplaySuggest(false);
    setSuggestData(false);
    router.push(`/search/${value}/1`);
  };

  return {
    formValue,
    displaySuggest,
    suggestData,
    holderValue,

    /* actions */
    setFormVal,
    handleEnterInput,
    handleOnChangeInput,
    handleSuggestion,
    setHolderValue,
  };
};

export default Hook;
