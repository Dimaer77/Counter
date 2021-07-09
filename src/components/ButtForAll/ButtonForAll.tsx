import React, {FC} from 'react';

type ButtonType = {
    title?: string
    fun: () => void
    style: any
    disable: any
}


export const ButtonForAll:FC<ButtonType> = ({title,fun,disable,style,children}) => {
    return (
        <div>
            <button className={style}
                    onClick={fun}
                    disabled={(disable)}
            >
                {children}
            </button>
        </div>
    )
}