import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)


    const onChangeRange = ([value1, value2]: [number, number]): void => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.range_box}>
                <span className={s.value_num}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>


            <SuperDoubleRange
                // сделать так чтоб value1 и value2 изменялось
                value={[value1 ?? 0, value2 ?? 100]}
                onChangeRange={onChangeRange}
                min={20}
                max={80}
                step={5}
            />


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
