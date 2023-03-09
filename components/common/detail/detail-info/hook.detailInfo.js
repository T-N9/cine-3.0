import useSWR from "swr";

/* Constants */
import { languages } from "../../../../constants/common";

const Hook = (media_type, id) => {
  let url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=68d49bbc8d40fff0d6cafaa7bfd48072&append_to_response=external_ids,keywords`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  let homepage,
    facebook,
    twitter,
    instagram,
    imdb,
    status,
    language,
    budget,
    revenue,
    keywords,
    type,
    networks;

  if (data) {
    homepage = data?.homepage;

    networks = data?.networks;
    type = data?.type;

    if (data?.external_ids) {
      facebook = data?.external_ids.facebook_id;
      twitter = data?.external_ids.twitter_id;
      instagram = data?.external_ids.instagram_id;
      imdb = data?.external_ids.imdb_id;
    }

    status = data?.status;
    let getLanguage = languages.filter((item) => {
      return item.iso_639_1 === data?.original_language;
    });
    language = getLanguage[0].english_name;
    // data?.budget && (budget = `$${data?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
    // data?.revenue && (revenue = `$${data?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);

    data?.budget && (budget = `$${data?.budget.toLocaleString()}`);
    data?.revenue && (revenue = `$${data?.revenue.toLocaleString()}`);

    data?.keywords.keywords &&
      (keywords = data?.keywords.keywords.map((item) => {
        return (
          <span
            key={item.name}
            className="border border-solid border-primary p-[3px] rounded-sm mr-1 mb-1 keyword-bg"
          >
            {item.name}
          </span>
        );
      }));

    data?.keywords.results &&
      (keywords = data?.keywords.results.map((item) => {
        return (
          <span
            key={item.name}
            className="border border-solid border-primary p-[3px] rounded-sm mr-1 mb-1 keyword-bg"
          >
            {item.name}
          </span>
        );
      }));

    keywords.length === 0 && (keywords = null);
  }

  return {
    data,
    error,
    homepage,
    facebook,
    twitter,
    instagram,
    imdb,
    status,
    language,
    budget,
    revenue,
    keywords,
    type,
    networks,
  };
};

export default Hook;
