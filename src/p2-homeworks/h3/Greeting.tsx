import React, {ChangeEvent, KeyboardEvent} from 'react'
import css from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    addUserByEnterCallback: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserByEnterCallback} // деструктуризация пропсов
) => {
    const inputClass = error ? css.error : "" // need to fix with (?:)
    const btnErrorClass = error ? css.btn_err : ""

    const throwError = error
        ? <div className={css.throwError}>Invalid name</div>
        : <div className={css.empty_div}></div>

    return (
        <div className={css.main}>
            <div className={css.div_create}>Create new user:</div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={addUserByEnterCallback}
                className={inputClass + ' ' + css.input_css}
            />
            <button onClick={addUser} className={css.btn + ' ' + btnErrorClass}>add</button>
            <span className={css.user_qty}>( User QTY: {totalUsers} )</span>
            {throwError}
        </div>
    )
}

