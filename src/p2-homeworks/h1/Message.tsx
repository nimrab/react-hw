import React from 'react'
import {messageDataPropsType} from "./HW1"
import css from './Message.module.css'

const Message: React.FC<messageDataPropsType> = (props) => {
    return (
        <div className={css.main}>
            <div className={css.round_div}><img src={props.avatar} alt="avatar" className={css.img}/></div>
            <div className={css.message_box}>

                <div className={css.name}>{props.name}</div>
                <div className={css.message}>{props.message}</div>

                <div className={css.bubble_div}><span className={css.time}>{props.time}</span></div>

            </div>

        </div>
    )
}

export default Message
