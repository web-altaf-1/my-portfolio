import React, { useRef } from 'react';
import './Contact.css';

import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
    var form = useRef();

    const handleSendEmail = (event) => {
        event.preventDefault();
        // Sending Email by EmailJs 
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLETE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
                toast('Email sent Successfull !!');
                form.current.reset();
            }, (error) => {

                toast("Please check Internet connection or try again later !! ")


            });


    }


    const handleEmail = () => {

    }
    const handleGitHub = () => {

    }
    const handleFacebookLink = () => {   //facebook button event handler
        window.open(
            'https://www.facebook.com/altaf.web',
            '_blank'
        );
    }

    const handleInstagramLink = () => {    //instagram button event handler
        window.open(
            'https://www.instagram.com/altaf.web/',
            '_blank'
        );
    }
    const handleTwitterLink = () => {    //twitter button event handler
        window.open(
            'https://twitter.com/webaltaf1',
            '_blank'
        );
    }
    

    return (
        <div data-aos="fade-right">
            
            <section className="contact_us" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row" >
                                    <div className="col-md-10">
                                        <div className="contact_form_inner" >
                                            <div className="contact_field">
                                                <h3>Contact Me</h3>
                                                <p>Feel Free to contact us any time. I will get back to you as soon as I can!.</p>

                                                {/* contact form here  */}
                                                <form ref={form} onSubmit={handleSendEmail}>
                                                    <input required type="text" className="form-control form-group" name='user_name' placeholder="Name" />
                                                    <input required type="email" className="form-control form-group" name='from_email' placeholder="Email" />
                                                    <textarea required className="form-control form-group" placeholder="Message" name='message'></textarea>
                                                    <input className='contact_form_submit' type="submit" value="Send" />
                                                </form>
                                                {/* form end here  */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* mobile social icon  */}
                                    <div className="col-md-2">
                                        
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                        
                                            <div className="socil_item_inner d-flex ">
                                                <li onClick={handleFacebookLink}><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                                <li onClick={handleInstagramLink}><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li onClick={handleTwitterLink}><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="contact_info_sec">
                                    <h4>Contact Info</h4>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-headset"></i>
                                        <span>+88018 7337 9859</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <span>web.altaf.1@gmail.com</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-map-marked-alt"></i>
                                        <span>385/7 Maluher, Banaripara, Barisal, Bangladesh</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* react toastify tag imported here  */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;