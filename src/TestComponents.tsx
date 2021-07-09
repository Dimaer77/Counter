import React, {useEffect, useState} from "react";


export function TestComponents() {

    let [val, setVal] = useState<number>(1)
    let constKey = "counterKey"


    useEffect(()=>{
        let valueAsString = localStorage.getItem(constKey)
        if (valueAsString) {
            let newVal = JSON.parse(valueAsString)
            setVal(newVal)
        }
    },[])
    useEffect(() => {
        localStorage.setItem(constKey, JSON.stringify(val))
    },[val])


    const increaseCount = () => {
        setVal(val + 1)

    }
    const setLocal = () => {
        localStorage.setItem(constKey, JSON.stringify(val))


        //
    }
    const getLocal = () => {

        let valueAsString = localStorage.getItem(constKey)
        if (valueAsString) {
            let newVal = JSON.parse(valueAsString)
             setVal(newVal)
        }

    }

    const clearLocal = () => {
        localStorage.clear()
        setVal(0)
    }
    const removeLocal = () => {
        localStorage.removeItem("value+1")
        setVal(0)
    }
    return (
        <div>
            <div>
                {/*<span>{val}</span>*/}
                {/*<button onClick={increaseCount}> +++</button>*/}
                {/*/!*<button onClick={setLocal}> set local</button>*!/*/}
                {/*/!*<button onClick={getLocal}> get local</button>*!/*/}
                {/*/!*<button onClick={clearLocal}> clear</button>*!/*/}
                {/*/!*<button onClick={removeLocal}> remove</button>*!/*/}

            </div>
        </div>
    )


}

