import React, { useState } from 'react';
import SignUp from './SignUp';
import Success from './Success';
import './contact.css';
import formIMG from '../../assests/imgs/formIMG.svg'



function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function subitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
            <div className='form-container'>
                {/* <span className='close-btn'>x</span> */}
                <img src={formIMG} alt='phone displaying welcome to digibeat with the logo'
                    className='form-img' />
                {!isSubmitted ? <SignUp submitForm={subitForm} />
                    : <Success />}
            </div>
        </>
    );
};

export default Form;
