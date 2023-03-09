import useSWR from "swr";

const Hook = (media_type, id) => {

    let url = `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=68d49bbc8d40fff0d6cafaa7bfd48072`
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(url, fetcher); 

    let trailers, trailersList, view_more = true;

    if (data) {

        if (data?.results?.length !== 0) {
            if (data?.results?.length >= 3) {
                trailers = data?.results?.slice(0, 3);
            } else {
                trailers = data?.results;
                view_more = false;
            }

            trailersList = trailers?.map((item, index) => {
                return (
                    <div key={index}>
                        <iframe className="w-[300px] h-[250px]" src={`https://www.youtube.com/embed/${item.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )
            })
        } else {
            view_more = false;
            trailersList = null;
        }
    }

    return {
        data,
        error,
        trailersList,
        view_more
    }
}

export default Hook;
