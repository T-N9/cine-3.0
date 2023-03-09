import React from "react";
import { Cancel } from "@mui/icons-material";

/* Hook */
import Hook from "./hook.YTPopUp";

const YTPopUp = ({ trailer, isYTPopUp, close_YTPopUp }) => {
  const {} = Hook();

  return (
    <>
      <div
        className={`fixed z-[5000] transition-all ease-linear flex justify-center items-center backdrop-grayscale bg-black bg-opacity-80 w-full h-full top-0 left-0 right-0 bottom-0 ${
          isYTPopUp ? "opacity-100 visible" : "opacity-0 invisible"
        } `}
      >
        <div
          onClick={() => close_YTPopUp()}
          className="absolute top-0 bottom-0 left-0 right-0"
        ></div>
        <div className="relative z-[10000] flex items-end flex-col w-11/12 h-[35%]   md:w-4/5 md:h-[45%] lg:h-4/5 lg:w-1/2">
          <button onClick={() => close_YTPopUp()} className="text-danger bg-transparent mb-2 cursor-pointer w-[50px] h-[20px]">
            <Cancel />
          </button>
          {trailer !== null ? (
            <iframe
              className="bg-dark border-[3px] border-primary rounded-md h-full w-full"
              src={isYTPopUp ? `https://www.youtube.com/embed/${trailer}` : ``}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="bg-dark border-[3px] border-primary rounded-md w-full h-full flex justify-center items-center text-danger">
              <h1>Trailer Not Found!</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default YTPopUp;
