import React, {ChangeEvent, useEffect, useRef, useState} from 'react';

import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Butwrapper} from "./components/Butwrapper/ButWrapper";
import {TestComponents} from "./TestComponents";
import {SettingsWrapper} from "./components/SettingBlock/SettingsWrapper";


function App() {
    let [startVal, setStartVal] = useState<number>(0)
    let [maxVal, setMaxVal] = useState<number>(5)
    let [num, setNum] = useState<number>(0)
    let [show,setShow] = useState<boolean>(false)

    // let ref = useRef<any>(null)
    let refTwo = useRef<any>(null)

    useEffect(() => {
        let valueAsString = localStorage.getItem("startVal")
        if (valueAsString) {
            let newVal = JSON.parse(valueAsString)
            setStartVal(newVal)
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem("maxVal")
        if (valueAsString) {
            let newVal = JSON.parse(valueAsString)
            setMaxVal(newVal)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("maxVal", JSON.stringify(maxVal))
    }, [maxVal])
    useEffect(() => {
        localStorage.setItem("startVal", JSON.stringify(startVal))
    }, [startVal])


    function increaseCount() {
        let newCount = num + 1
        setNum(newCount++)
    }

    const resetCount = () =>{

        setNum(startVal)
    }

    function setValue() {
        setShow(true)
        setNum(+startVal)
    }

    // const chenges =()=>{
    //  ref.current.style.backgroundColor= "blue"
    // }
    return (
        <div className={"App"}>
            <div
                className={"Blockone"}>

                <button onClick={resetCount}></button>
                <SettingsWrapper
                    callBackSetShow={setShow}
                    refValue={refTwo}
                    setStartVal={setStartVal}
                    startVal={startVal}
                    setMaxVal={setMaxVal}
                    maxVal={maxVal}
                    setClick={setValue}
                />
            </div >
            <div className="Blockone">
                <Counter stateShow={show}  maxValue={maxVal} startVal={startVal} num={num}/>
                <Butwrapper resetCount={resetCount} increaseCount={increaseCount} num={num} maxValue={maxVal}/>
            </div>
            <TestComponents/>

        </div>
    );
}

export default App;
