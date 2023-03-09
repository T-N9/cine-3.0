import React from "react";

/* Hook */
import Hook from "./hook.detailInfo";

/* Icons */
import { InsertLinkOutlined } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import {
  SiFacebook,
  SiImdb,
  SiInstagram,
  SiTwitter,
} from "@icons-pack/react-simple-icons";

const DetailInfo = ({ media_type, id }) => {
  const {
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
  } = Hook(media_type, id);

  return (
    <section className="bg-wah px-6 inline-block w-full lg:w-[300px] rounded-md clr-black">
      {!data ? (
        <div className="h-full flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="py-5">
          <div className="text-secondary w-full mb-5">
            <div className="flex justify-between items-center">
              <a href={homepage} target="_blank" rel="noreferrer">
                <InsertLinkOutlined />
              </a>

              {facebook && (
                <a
                  href={`https://www.facebook.com/${facebook}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiFacebook color="#1F4287" />
                </a>
              )}

              {instagram && (
                <a
                  href={`https://instagram.com/${instagram}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiInstagram color="#1F4287" />
                </a>
              )}

              {twitter && (
                <a
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiTwitter color="#1F4287" />
                </a>
              )}

              {imdb && (
                <a
                  href={`https://www.imdb.com/title/${imdb}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiImdb color="#1F4287" />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="">
              <p className="font-bold text-base mb-[2px]">Status</p>
              <p className="text-base flex">{status}</p>
            </div>
            <div className="">
              <p className="font-bold text-base mb-[2px]">Original Language</p>
              <p className="text-base flex">{language}</p>
            </div>
            {networks && (
              <div className="">
                <p className="font-bold text-base mb-[2px]">Networks</p>
                <div className="text-base flex">
                  {networks.map((item) => {
                    return (
                      <span key={item.name}>
                        <img
                          src={`https://www.themoviedb.org/t/p/h30${item.logo_path}`}
                          alt={item.name}
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {type && (
              <div className="           flex flex-col gap-y-1">
                <p className="font-bold text-base mb-[2px]">Type</p>
                <p className="text-base flex">{type}</p>
              </div>
            )}

            {media_type === "movie" && (
              <div className="           flex flex-col gap-y-1">
                <p className="font-bold text-base mb-[2px]">Budget</p>
                <p className="text-base flex">{budget ? budget : "-"}</p>
              </div>
            )}

            {media_type === "movie" && (
              <div className="            flex flex-col gap-y-1">
                <p className="font-bold text-base mb-[2px]">Revenue</p>
                <p className="text-base flex">{revenue ? revenue : "-"}</p>
              </div>
            )}

            <div className="         flex flex-col gap-y-1">
              <p className="font-bold text-base mb-[2px]">Keywords</p>
              <p className="text-base flex">
                <span className="flex flex-wrap">
                  {keywords === null
                    ? "No keywords have been added."
                    : keywords}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailInfo;
