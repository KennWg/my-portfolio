import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const nameEl = useRef(0);
    const emailEl = useRef(0);
    const messageEl = useRef(0);


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        nameEl.current.value = '';
        emailEl.current.value = '';
        messageEl.current.value = '';
        setFormState({ name: '', email: '', message: '' })
    };

    return (
        <section className='px-2 py-2'>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='py-2 px-2 d-flex row'>
                    <label htmlFor="name" className='px-2 col-3'>Name:</label>
                    <input type="text" className="col-9" defaultValue={name} onBlur={handleChange} name="name" ref={nameEl}/>
                </div>
                <div className='py-2 px-2 d-flex row'>
                    <label htmlFor="email" className='px-2 col-3'>Email:</label>
                    <input type="email" className="col-9" defaultValue={email} onBlur={handleChange} name="email" ref={emailEl}/>
                </div>
                <div className='py-2 px-2 d-flex row'>
                    <label htmlFor="message" className='px-2 col-3'>Message:</label>
                    <textarea name="message" className="col-9" defaultValue={message} onBlur={handleChange} rows="5" ref={messageEl}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;