import React from 'react'
import { useState } from 'react'
import './Form.css'


export const Form = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onChangeHandler = async (e) => {
        const { name, value } = e.target;
        setUserDetails((prevUser) => ({
            ...prevUser, [name]: value
        }));
  
    }

    const onSubmitHandler = async (evt) => {
        evt.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        try {

            const response = await fetch('http://localhost:9090/user', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails)
            })
            const data = await response.json();
            console.log(data);
            console.log(data.message);
            if (response.ok) {
                setSuccessMessage("Form submitted successfully.")
                setUserDetails({
                    name: '',
                    email: '',
                    message: ''
                });
            }else{
             setErrorMessage(data.message || "Failed to submit form.");
            }
        } catch (err) {
            console.log(err);
             setErrorMessage("Failed to submit form.Please try again");

        }

    }


    return (
        <div className='form_Container'>
            <form action="" onSubmit={onSubmitHandler} className='form' >
                <h2>Fill the form</h2>
                {successMessage && <p className='success'>{successMessage}</p> }
                {errorMessage && <p className='error'>{errorMessage}</p>} 
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Rahul Singh' name='name' value={userDetails.name} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='rahulsingh@gmail.com' name='email' value={userDetails.email} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={userDetails.message} onChange={onChangeHandler} placeholder='write a message..' required></textarea>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    )
}
