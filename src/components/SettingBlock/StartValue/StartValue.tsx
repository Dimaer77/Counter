import React, {ChangeEvent, FC, useRef} from 'react';
import stl from './StartValue.module.css'

type PropsType = {
    refValue: any
    maxValue: number
    setStartVal: (val: number) => void
    startVal: number
    callBackSetShow:(val:boolean)=>void
}


export const StartValue: FC<PropsType> = props => {
    const {
        refValue,
        maxValue,
        setStartVal,
        startVal,
        children
   , ...resProps } = props
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        props.setStartVal(+value)

    }


    return (
        <div>
            <span> START VALUE</span>
            <input
                onFocus={()=> resProps.callBackSetShow(false)}
                ref={props.refValue}
                className={props.startVal < 0 ? stl.inError : props.startVal >= props.maxValue ? stl.inError : stl.in}
                type={"number"}
                onChange={onChange}
                value={props.startVal}
            />
        </div>
    )
}