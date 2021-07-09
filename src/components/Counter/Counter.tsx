import React, {useEffect, useState} from 'react';
import styl from "./Counter.module.css"

type NumType = {
    stateShow:boolean
    startVal:number
    maxValue:number
    num:number
}
// props.stateShow ? props.num :"Set value" ? error:"Error";
export function Counter(props:NumType) {

const error = props.startVal<0

    return (
        <div className={styl.wrapper}  >
            <div className={props.num == props.maxValue ? styl.error: ""} >

                {props.stateShow ? props.num :"Set value"}
                {error && "error"}

            </div>
        </div>
    );
}
