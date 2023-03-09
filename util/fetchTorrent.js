import useSWR from "swr";

/* constant */
import { YTS_TORRENT } from "../constants/common";

export const fetchTorrent = (imdbId) => {

    const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error } = useSWR(`${YTS_TORRENT}${imdbId}` , fetcher);


    const torrentList = (data?.data?.movie_count > 0) ? data?.data?.movies[0]?.torrents : [];

    return {
        data,
        error,

        torrentList
    }

}