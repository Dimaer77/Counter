import React from 'react';
import style from "../Butwrapper/Butwrapper.module.css"

type propsType={
    num:number,
    increaseCount:()=>void
}

export function Plusbutton(props:propsType) {
    return (
        <div >
            <button className={props.num===5 ? style.hid : style.but} onClick={props.increaseCount}  disabled={(props.num===5)}  >
                INC
            </button>
        </div>
    );
}
