import React from 'react';
import style from "./Butwrapper.module.css"
import {Plusbutton} from "../Plusbutton/Plusbutton";
import {Resetbutton} from "../Resetbutton/Resetbutton";
import {ButtonForAll} from "../ButtForAll/ButtonForAll";
import styl from "../Counter/Counter.module.css";

type propsType = {
    maxValue:number
    num: number
    increaseCount: () => void
    resetCount: () => void
}

export function Butwrapper(props: propsType) {
    return (
        <div className={style.wrap}>
            {/*<Plusbutton increaseCount={props.increaseCount} num={props.num}/>*/}
            {/*<Resetbutton resetCount={props.resetCount} num={props.num}/>*/}
            <ButtonForAll
                title={"INC"}
                style={props.num == props.maxValue ? style.hid : style.but}
                fun={props.increaseCount}
                disable={props.num == props.maxValue}>INC</ButtonForAll>
            <ButtonForAll
                title={"RESET"}
                style={props.num == props.maxValue? style.but : style.hid}
                fun={props.resetCount}
                disable={props.num < props.maxValue}>RESET</ButtonForAll>
        </div>
    );
}
