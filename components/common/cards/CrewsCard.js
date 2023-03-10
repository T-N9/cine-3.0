import React from "react";
import Image from "next/image";

/* Icons */
import { Person } from "@mui/icons-material";

const CrewsCard = ({ image, name, job }) => {
  return (
    <div className="flex items-center bg-wah gap-x-3 max-w-[250px] rounded overflow-hidden select-none cus-box-shadow">
      {image !== null ? (
        <Image
          width={60}
          height={76}
          className="w-[60px] h-full object-cover"
          quality='10'
          src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${image}`}
          alt={`${name}`}
        />
      ) : (
        <div className=" flex justify-center items-center text-primary w-[60px] h-[75px]">
          <Person />
        </div>
      )}

      <div className=" text-black">
        <h1 className="text-[16px] text-black mb-2">{name}</h1>

        <p className="text-[14px] mb-0">
          <span>{job}</span>
        </p>
      </div>
    </div>
  );
};

export default CrewsCard;
