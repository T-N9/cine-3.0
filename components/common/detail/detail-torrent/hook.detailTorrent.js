import React from 'react';

/* Utils */
import { fetchTorrent } from '../../../../util/fetchTorrent';

const Hook = (imdbID) => {

    const { data, error, torrentList } = fetchTorrent(imdbID);

    return {
        data,
        error,

        torrentList
    }
}

export default Hook;
