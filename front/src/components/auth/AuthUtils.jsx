import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const AuthForm = ({pagin, handleAuthed}) => {
    const [formHandler, setFormHandler] = useState(true)
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [formData2, setFormData2] = useState({ name: '', email: '', password: '' });

    const t = true
    const f = false

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleChangeReg = (e) => {
        setFormData2({ ...formData2, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (formHandler) {
            formToogleAuth();
        } else {
            formToogleReg();
        }
    };
    
    const formswitcher = (keyr) => {
        if (formHandler === keyr) {
            handleAuthed(true)
            pagin(1)
        } else {
            setFormHandler(keyr)
        }
        
    }

    const formToogleAuth = async () => {
        // setFormHandler(true);
        
        try {
            const response = await axios.post('/auth', formData);
            console.log('all success', response.data);

            // Дополнительная логика после успешной аутентификации
            console.error(error);

        } catch (error) {
            console.error(error);
            // Дополнительная логика при ошибке аутентификации
        }
    };
    
    const formToogleReg = async () => {
        // setFormHandler(false);
        
        try {
            const response = await axios.post('/reg', formData2);
            console.log('all success', response.data);
            // Дополнительная логика после успешной регистрации
        } catch (error) {
            console.error(error);
            // Дополнительная логика при ошибке регистрации
        }
    };
    

    return (
        <>
            <Container color='secondary' sx={{
                width: '900px',
                height: '600px',
                backgroundColor: '#E3F2FD',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: '20px'
            }} maxWidth="sm">
                <form sx={{
                    width: '900px',
                    height: '600px',
                    backgroundColor: '#E3F2FD',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: '20px'
                }} className='form'>
                    {formHandler ? <>
                        <TextField type="text" name="name" variant="filled" color='primary' sx={{
                            margin: '12px'
                        }} value={formData.name} onChange={handleChange} label="Имя пользователя" /><br />
                        <TextField type="password" name="password" variant="filled" color='primary' sx={{
                            margin: '12px'
                        }} value={formData.password} onChange={handleChange} label="Пароль" /><br />
                    </>
                        :
                        <>
                        <TextField type="text" name="name" variant="filled" color='primary' sx={{
                            margin: '12px'
                        }} value={formData.name} onChange={handleChangeReg} label="Имя пользователя" /><br />
                        <TextField type="text" name="email" variant="filled" color='primary' sx={{
                            margin: '12px'
                        }} value={formData.name} onChange={handleChangeReg} label="Электронная почта" /><br />
                        <TextField type="password" name="password" variant="filled" color='primary' sx={{
                            margin: '12px'
                        }} value={formData.password} onChange={handleChangeReg} label="Пароль" /><br />
                    </>}
                    <Button type="button" variant="contained" sx={{
                        width: '160px',
                        height: '45px',
                        marginTop: '12px',
                        marginRight: '20px',
                        marginLeft: '18px'
                    }} color="primary" onClick={() => formswitcher(f)}>Получить</Button>
                    <Button type="button" variant="contained" sx={{
                        width: '160px',
                        height: '45px',
                        marginTop: '12px'
                    }} color="primary" onClick={() => formswitcher(t)}>Войти</Button>
                </form>
            </Container>
        </>
    );
};

export default AuthForm;