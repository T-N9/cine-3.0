import React from 'react';
import Image from 'next/image';

/* Icons */
import { Person } from '@mui/icons-material';

const CastsCard = ({
    profile_path,
    image,
    name,
    character
}) => {
    return (
        <div className='relative inline-flex flex-col min-h-[250px] min-w-[110px] lg:min-h-[280px] bg-wah text-black lg:w-[120px] rounded overflow-hidden cus-box-shadow select-none'>
            {
                profile_path !== null ?
                <Image layout='intrinsic' width={120} height={150} quality='10' className='object-contain flex-1' src={image} alt={name} />
                :
                <div className='text-primary bg-gray w-full min-h-[140px] lg:min-h-[9.575rem] flex justify-center items-center'>
                    <Person/>
                </div>
            }

            <div className='p-[10px] flex flex-col gap-1'>
                <p className='font-bold text-sm lg:text-[1rem]'>
                    {name}
                </p>
                <p className='text-sm'>
                    {character}
                </p>
            </div>
        </div>
    );
}

export default CastsCard;
