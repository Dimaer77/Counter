import React, {ChangeEvent} from 'react';
import stl from "../StartValue/StartValue.module.css";

type PropsType = {
    startVal:any
    setMaxVal: (val:number)=>void
    maxVal: any
}



export const  MaxValue =(props:PropsType)=>{



    const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
        let value = e.currentTarget.value
        if (value){
            props.setMaxVal(+value)
        }
    }

    return (
        <div>
            <span> MAX VALUE</span>
            <input className={props.maxVal <0 ?stl.inError: props.maxVal <= props.startVal ? stl.inError : stl.in}
                   type="number"
                   onChange={onChange}
                   value={props.maxVal}
            />
        </div>
    )
}