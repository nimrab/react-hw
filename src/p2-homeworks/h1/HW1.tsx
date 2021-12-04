import React from 'react'
import Message from "./Message";

export type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: messageDataPropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vasya',
    message: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpghttps://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    time: '22:00',
}

const altMessage: messageDataPropsType = {
    avatar: `https://icdn.lenta.ru/images/2020/04/23/16/20200423160206740/square_320_de8d86cd47467b7a80bbdf24ddb9cd9b.png`,
    name: 'Cheb friend',
    message: 'Погода сегодня хорошая',
    time: '22:20'
}

function HW1() {
    return (
        <div>
            <hr/>
            {/*HTML input text style*/}

            {/*/!*should work (должно работать)*!/*/}

            {/*<Message*/}
            {/*    avatar={messageData.avatar}*/}
            {/*    name={messageData.name}*/}
            {/*    message={messageData.message}*/}
            {/*    time={messageData.time}*/}
            {/*/>*/}


            {/*<hr/>*/}
            HTML input text style
            {/*для личного творчества, могу проверить*/}
            <Message
                avatar={altMessage.avatar}
                name={altMessage.name}
                message={altMessage.message}
                time={altMessage.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
