import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import css from './HW9.module.css'

function Clock() {



    const [timerId, setTimerId] = useState<number>(0)
    const [time, setTime] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setTime(new Date())
        }, 1000)
        setTimerId(id)
    }


/*
    function stringTimeFunc(): string {
        const hours: string = new Date().getHours().toString().length === 1 ? '0' + new Date().getHours().toString() : new Date().getHours().toString()
        const minutes: string = new Date().getMinutes().toString().length === 1 ? '0' + new Date().getMinutes().toString() : new Date().getMinutes().toString()
        const seconds: string = new Date().getSeconds().toString().length === 1 ? '0' + new Date().getSeconds().toString() : new Date().getSeconds().toString()

        return hours + ':' + minutes + ':' + seconds
    }// fix with date


*/


    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }




   //const stringDate = new Date().getDate().toString() + '.' + new Date().getMonth().toString() + 1 + '.' + new Date().getFullYear().toString() // fix with date
   const stringDateImproved = new Date().toLocaleDateString() // берем текущую дату и по фрмату даты ОС пользователя
   const stringTimeImproved = time?.toLocaleTimeString()

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={css.time}
            >
                {stringTimeImproved}
            </div>

            {show && (
                <div className={css.date}>
                    {stringDateImproved}
                    {stringTimeImproved}
                </div>
            )}

            <SuperButton onClick={start} className={css.btn}>start</SuperButton>
            <SuperButton onClick={stop} className={css.btn}>stop</SuperButton>

        </div>
    )
}

export default Clock
