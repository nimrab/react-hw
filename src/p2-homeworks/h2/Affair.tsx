import React from 'react'
import css from './Affair.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
    }// need to fix
    let priorityColorStyle = '';
    switch(props.affair.priority) {
        case 'low':
            priorityColorStyle = 'green';
            break;
        case 'middle':
            priorityColorStyle = 'gold';
            break;
        case 'high':
            priorityColorStyle = 'red';
            break;
    }
    const colorStyle = {color: priorityColorStyle}



    return (
        <div className={css.affair}>
            <div className={css.name}>{props.affair.name}</div>
            <div className={css.priority} style={colorStyle}>[ {props.affair.priority} ]</div>
            <button onClick={deleteCallback} className={css.btn}>X</button>
        </div>
    )
}


export default Affair
