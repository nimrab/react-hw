import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})


export const requestsAPI = {

    auth_test(value: boolean) {
        return instance.post<ResponseType>(`auth/test`, {success: value})
    }

}

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery:{}
}