import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(false)
        setName(event.currentTarget.value) // need to fix
    }
    const addUser = () => {
        const nameTrimmed = name.trim()
        if (checkInputValue(nameTrimmed)) {
            alert(`Hello ${nameTrimmed} !`) // need to fix
            addUserCallback(nameTrimmed)
            setName("")
        } else {
            setError(true)
            setName("")
        }
    }

    const addUserByEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addUser()
        }

    }

    const checkInputValue = (value: string) => {
        return !!value
    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            addUserByEnterCallback={addUserByEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

