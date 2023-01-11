//import useForm from './useForm';
//import validate from './validateInfo';
//import { TextField } from '@mui/material';
import './contact.css';
import emailjs from '@emailjs/browser';
import {
    // useState, useEffect, 
    useRef } from "react";

const SignUp = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_msoeozc', 'template_jcyxg3c', form.current, 'lED2rmg52SRzg8vA3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    };


// const useForm = (callback, validate) => {
//     const [values, setValues ] = useState({
//         name:'',
//         email:'',
//         job:'',
//         phone:''
//     })
//     // validation 
//     const [errors, setErrors] = useState({})
//     //form useState submittion function
//     const [isSubmitting, setIsSubmitting] = useState(false);


//     const handleChange = e => {
//         const { name, value } = e.target
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };
//     setErrors(validate(values));
//     setIsSubmitting(true);



//     useEffect(() => {
//          if(Object.keys(errors).length === 0 && 
//          isSubmitting) {
//             callback()
//          }
//     },
//      [errors]
//     );


    return (
        <div className='form-contact-right'>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <h1>
                    Interested in trying DigiBeat?
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>Full Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='form-input'
                        placeholder='Enter Your Full Name'
                        // value={values.name}
                        // onChange={handleChange}
                        />
                    {/* {errors.name && <p>{errors.name}</p>} */}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                        type='email' 
                        name='email' 
                        className='form-input'
                        placeholder='Enter Your Email'
                    //     value={values.email}
                    //     onChange={handleChange}
                         />
                     {/* {errors.email && <p>{errors.email}</p>} */}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='job' className='form-label'>I am a:</label>
                    <select 
                        type='text' 
                        name='job' 
                        className='form-input'
                        placeholder='Enter Your Job Title'
                        // value={values.job}
                        // onChange={handleChange}
                        >
                        <option value='Payer'>Payer</option>
                        <option value='Physician'>Physician</option>
                        <option value='Patient'>Patient</option>
                        <option value='Other'>Other</option>
                        </select>
                    {/* {value==="Other"&& <TextField type='text'/>} */}
                        
                    {/* {errors.job && <p>{errors.job}</p>} */}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='phone' className='form-label'>Phone Number</label>
                    <input  
                        name='phone' 
                        className='form-input'
                        placeholder='Enter Your Phone Number'
                        defaultCountry='US'
                        // value={value}
                        // control={values.phone}
                        // onChange={setValue}
                        />
                    {/* {errors.organization && <p>{errors.organization}</p>} */}
                </div>
                <button className='form-input-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
};

export default SignUp
