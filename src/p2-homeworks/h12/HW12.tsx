import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeBgAC, InitialStyleStateType} from "../h10/bll/styleReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = 'some'; // useSelector
    // useDispatch, onChangeCallback


    const state = useSelector<AppStoreType, InitialStyleStateType>(state => state.style)
    const dispatch = useDispatch()

    const themes = Object.keys(state.styles)

    const onChangeOption = (value: string) => {
       dispatch(changeBgAC(value))
    }

    return (
        <div>
     {/*   <div className={s[theme]}>*/}
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div>
                <SuperSelect
                    options={themes}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>

            <div className={s.bg_box} style={{background: state.current}}>
            </div>


        </div>
    )
}

export default HW12;
