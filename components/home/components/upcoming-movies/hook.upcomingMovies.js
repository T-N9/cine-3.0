import { useState } from "react";

const Hook = (data) => {

    const [ maxNum, setMaxNum ] = useState(6);

    const usedDataList = data?.results.slice(0, maxNum);

    const handelMaxNum = () => {
        setMaxNum( prev => prev+4);
    }

    return {
        maxNum,
        usedDataList,

        /* actions */
        setMaxNum,
        handelMaxNum
    }
}

export default Hook;
