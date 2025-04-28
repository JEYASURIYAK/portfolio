import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const owner_name = 'Jeyasuriya Kalaimani';
    
    const validation = (e) => {
        e.preventDefault();


        //your emai service ID and templete ID and Public key

        const service_ID = "service_91grk19";
        const templete_ID = "template_mxi1miv";
        const public_Key = "acBX4aKjU1kqrVAey";

        // templates parameters
        const templateparameters = {
            from_name: name,
            from_email:email,
            from_subject:subject,
            to_name: owner_name,
            message:message
        }

        emailjs.send(service_ID,templete_ID,templateparameters,public_Key)
        .then((response) =>{
            console.log("Email sent successfully",response)
            alert('The mail was sent successfully!')
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            // console.log([name,email,subject,message]);

        })
        .catch((e) =>{
            console.log("Email sending Error :",e);
        })


    }

    const cancel = () =>{
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

    }



    return (
        <div className="home-container contact-container" id='Contact'>
            <section className='home row contact-section' >
                <h1>Contact <span>Me</span></h1>
                <div className="col-md-6 details-container">
                    <h3>Contact Details :</h3>
                    <div className="contact-list">
                        <li><i className='bx bxs-send' ></i>jeyasuriya7676@gmail.com</li>
                        <li><i className='bx bxs-phone'></i>+91 9894204897</li>
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.facebook.com/profile.php?id=100050758190492"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.instagram.com/suriya_ayirus0208/"><i className='bx bxl-instagram'></i></a>
                        <a href="https://www.linkedin.com/in/jeyasuriyak/"><i className='bx bxl-linkedin'></i></a>
                    </div>

                </div>
                <div className="col-md-6 form-container">
                    <form className='contact-form' onSubmit={validation}>
                        <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder='Enter your E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="text" required placeholder='Enter your Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        <textarea name='' id='' cols="30" rows="5" value={message} placeholder='Enter your Message' onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <div className="row button">
                            <div className="col-6"><button type="submit" className='send' >Submit</button></div>
                            <div className="col-6"><button type="submit" onClick={cancel} className='cancel'>Cancel</button></div>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    )
}
