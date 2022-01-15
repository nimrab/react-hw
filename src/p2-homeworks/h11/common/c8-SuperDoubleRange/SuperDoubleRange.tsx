import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css"


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    onChange?: (value: number) => void
    value?: [number, number]
    className?: string
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange,
        onChangeRange,
        value,
        className
        //onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    //@ts-ignore
    const [value1, value2] = value

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(+e) // сохраняем старую функциональность

        if (e.currentTarget.name === 'value1') {
                onChangeRange && onChangeRange([+e.currentTarget.value, value2])
        }
        if (e.currentTarget.name === 'value2') {
            onChangeRange && onChangeRange([value1, +e.currentTarget.value])
        }


    }


    const finalRangeClassName = `${s.super_range} ${className ? className : ''}`


    return (
        <>
            <form>
            <input
                type={'range'}
                name={'value1'}
                //@ts-ignore
                value={value[0]}
                onChange={onChangeCallback}
                className={finalRangeClassName}

            />
            <input
                type={'range'}
                name={'value2'}
                //@ts-ignore
                value={value[1]}
                onChange={onChangeCallback}
                className={finalRangeClassName}

            />
            </form>
        </>
    )
}

export default SuperDoubleRange
