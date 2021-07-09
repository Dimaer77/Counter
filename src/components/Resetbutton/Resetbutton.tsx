import React from 'react';
import style from "../Butwrapper/Butwrapper.module.css"

type propsType={
    num:number
    resetCount:()=>void
}

export function Resetbutton(props:propsType) {
    return (
        <div >
            <button  className={props.num===5 ? style.but : style.hid} onClick={props.resetCount} disabled={(props.num===0)} >
                Reset
            </button>
        </div>
    );
}
