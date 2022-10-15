import React, {ChangeEvent, useState} from 'react';
import styles from './SendEmail.module.scss';
import {Input} from '../../MainPage/Common/Input/Input';
import {Textarea} from '../../MainPage/Common/Textarea/Textarea';
import {Button} from '../../MainPage/Common/Button/Button';
import {useAppDispatch, useCustomSelector} from '../../../../bll/main/store';
import {
    changeGetInTouchData,
    GetInTouchStateType,
    sendMessageTC
} from '../../../../bll/features/sendMessage/getInTouchReducer';

export const SendEmail = () => {
    const dispatch = useAppDispatch()
    const {name, email, message} = useCustomSelector<GetInTouchStateType>(state => state.getInTouch)

    const [nameError, setNameError] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [messageError, setMessageError] = useState<string>('')

    const errorBorder = {'borderBottomColor': 'red'}

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        nameError && setNameError('')
        dispatch(changeGetInTouchData({name: e.currentTarget.value, email, message}))
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        emailError && setEmailError('')
        dispatch(changeGetInTouchData({name, email: e.currentTarget.value, message}))
    }
    const onChangeMessageHandler = (message: string) => {
        messageError && setMessageError('')
        dispatch(changeGetInTouchData({name, email, message}))
    }
    const onClickHandler = () => {
        name === "" ? setNameError('This field have to be filled') : setNameError('')
        email === ""
            ? setEmailError('This field have to be filled')
            : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
                ? setEmailError('')
                : setEmailError('Email is not correct')
        message === "" ? setMessageError('This field have to be filled') : setMessageError('')

        name !== "" && email !== "" && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        && message !== "" && dispatch(sendMessageTC({name, email, message}))
    }

    return (
        <div className={styles.rightBlock}>
            <h6>FEEL FREE TO CONTACT ME</h6>
            <p>If you want to leave me a message, please fill out the form below and I will reply you
                shortly.</p>

                <Input placeholder={'Your Name'}
                       icon={'fa-solid fa-user'}
                       value={name}
                       onChange={onChangeNameHandler}
                       error={nameError}
                       style={nameError ? errorBorder : {}}
                />
                <Input placeholder={'Your Email'}
                       icon={'fa-solid fa-envelope'}
                       value={email}
                       onChange={onChangeEmailHandler}
                       error={emailError}
                       style={emailError ? errorBorder : {}}
                />
                <Textarea placeholder={'Your Message'}
                          icon={'fa-solid fa-comments'}
                          value={message}
                          onChangeText={onChangeMessageHandler}
                          onChangeError={setMessageError}
                          error={messageError}
                          errorStyle={!!messageError}
                />
                <Button className={styles.button}
                        text="Send message"
                        icon="fa-solid fa-paper-plane"
                        targetBlank
                        onClick={onClickHandler}
                />

        </div>
    )
}