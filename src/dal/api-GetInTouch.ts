import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3010/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
})

// api
export const formGetInTouchAPI = {
    sendEmail(data: FormDataType) {
        return instance.post<any, any, FormDataType>('sendMessage', data)
    },
}

// types
export type FormDataType = {
    name: string
    email: string
    message: string
}