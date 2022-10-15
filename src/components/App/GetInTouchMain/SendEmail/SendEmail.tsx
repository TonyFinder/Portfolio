import React, {useState} from 'react';
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

    const errorBorder = {
        'borderBottomColor': 'red',
    }

    const onBlurSetName = (name: string) => dispatch(changeGetInTouchData({name, email, message}))
    const onBlurSetEmail = (email: string) => dispatch(changeGetInTouchData({name, email, message}))
    const onBlurSetMessage = (message: string) => dispatch(changeGetInTouchData({name, email, message}))
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
                       onBlurSetValue={onBlurSetName}
                       onChangeError={setNameError}
                       error={nameError}
                       style={nameError ? errorBorder : {}}
                />
                <Input placeholder={'Your Email'}
                       icon={'fa-solid fa-envelope'}
                       onBlurSetValue={onBlurSetEmail}
                       onChangeError={setEmailError}
                       error={emailError}
                       style={emailError ? errorBorder : {}}
                />
                <Textarea placeholder={'Your Message'}
                          icon={'fa-solid fa-comments'}
                          onBlurSetValue={onBlurSetMessage}
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