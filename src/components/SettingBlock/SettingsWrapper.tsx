import React, {FC} from 'react';
import stl from './SettingsWrapper.module.css'

import {StartValue} from "./StartValue/StartValue";
import {MaxValue} from "./MaxValue/MaxValue";
import {ButtonForAll} from "../ButtForAll/ButtonForAll";
import style from "../Butwrapper/Butwrapper.module.css";

type PropsType = {
    callBackSetShow:(val:boolean)=>void
    refValue:any
    setStartVal: (val:number)=>void
    startVal: number
    setMaxVal: (val:number)=>void
    maxVal: number
    setClick: () => void


}

export const SettingsWrapper:FC<PropsType>= ({callBackSetShow,maxVal,setMaxVal,startVal,setStartVal,refValue,setClick,children}) => {
    const disable = startVal === maxVal || startVal > maxVal || startVal< 0


    return (
        <div>
            <div className={stl.wrap} >
                <StartValue callBackSetShow={callBackSetShow} refValue={refValue}  maxValue={maxVal} startVal={startVal} setStartVal={setStartVal}/>
                <MaxValue maxVal={maxVal} setMaxVal={setMaxVal} startVal={startVal}/>
            </div>
            <div className={stl.btnWrap}>
                <ButtonForAll
                    title={"SET"}
                    style={startVal >= maxVal ? style.hid : style.but}
                    fun={setClick}
                    disable={disable}
                > Set</ButtonForAll>
            </div>
        </ div>
    )
}