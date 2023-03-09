import React from "react";
import ReactTooltip from "react-tooltip";

/* Constants */
import { YTS_DOWNLOAD } from "../../../../constants/common";

/* Hook */
import Hook from "./hook.detailTorrent";

const TorrentItem = ({ item }) => {
  return (
    <>
      <div className="flex flex-col">
        <a href={item.url}>
          <button
            data-place={item.size}
            className="torrent-btn cursor-pointer py-1 px-4 font-primary text-cfs-1 rounded-md text-wah"
          >
            <span className="font-bold">{item.quality}</span>.
            <span className="capitalize">{item.type}</span>
          </button>
        </a>
        <span className="text-[12px] mt-1 ml-4">{item.size}</span>
      </div>
    </>
  );
};

const DetailTorrent = ({ imdbID }) => {
  const { data, error, torrentList } = Hook(imdbID);

  if (!data) return <p>Fetching torrents 😉</p>;
  if (error || torrentList.length === 0) return <p>No torrents found 😑</p>;

  // console.log({torrentList})
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data &&
          torrentList.map((item, index) => {
            return <TorrentItem key={index} item={item} />;
          })}
      </div>
    </>
  );
};

export default DetailTorrent;
