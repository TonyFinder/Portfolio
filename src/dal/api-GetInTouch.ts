import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://server-portfolio-tonyfinder.herokuapp.com/',
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