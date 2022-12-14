import useFetch from "../../util/useFetch";
import React, {useEffect, useState} from "react";
import SideTodo from "../sideComponents/SideTodo";

const BodyPercent = () => {
    const [datas, isPending, error] = useFetch("http://localhost:3001/todos");
    let percent = 0;
    let count = 0;
    if (datas !== null) {
        datas.forEach((data) => {
            if (data.isDone === true) {
                count++;
            }
        })
        percent = Math.floor(count / datas.length * 100)
    }
    return (
        <div>
            <div className='body-percent-title'>Today's Progress</div>
            {isPending && <div>Loading</div>}
            {datas && <div className= 'body-percent-percent'> {percent}%
            </div>}
        </div>
    )
}
export default BodyPercent