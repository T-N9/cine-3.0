import useSWR from "swr";
import Image from "next/image";

const Hook = (media_type, id) => {

    let url = `https://api.themoviedb.org/3/${media_type}/${id}/images?api_key=68d49bbc8d40fff0d6cafaa7bfd48072`
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(url, fetcher); 

    let backdrops, backdropsList, view_more = true;
    if(data) {
        if(data?.backdrops.length >= 5) {
            backdrops = data?.backdrops?.slice(0, 5);
        } else {
            backdrops = data?.backdrops;
            view_more = false;
        }

        backdropsList = backdrops.map((item, index) => {
            return (
                <div key={index} className="relative h-[200px] w-[350px]">
                    <Image layout="fill" quality="10" src={`https://image.tmdb.org/t/p/w500${item.file_path}`} alt="backdrops" />
                </div>
            )
        })
    }else {
        backdrops = [];
        backdropsList = null;
        view_more  = false;
    }

    return {
        data,
        error,
        backdropsList,
        view_more
    }
}

export default Hook;
