import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h1 className='text-center py-2 fw-bold'>About</h1>
            <div className='d-lg-flex '>
                <div data-aos="fade-right" className='about-img-div '>
                    <img  src="https://i.ibb.co/1TK6FbC/a.png" alt="altaf-photo" />
                </div>
                <div data-aos="zoom-in-up" className='about-text-div '>
                    <p>My name is Md Altaf Hossen and I am an ambitious Frontend Engineer based in Bangladesh.</p>

                    <p>My target is to build things following the latest trend and technologies. And definitely my other primary goal is to find solutions for the problems. Grasp for limitless learning brought me to web programming. Because I love exploring new things and in web development there is no end of learning. Currently, I am learning NextJS and also have a thirst for learning GraphQL and Redux.</p>

                    <p>Beside coding I usually love to read the documentation of different things. I also like to listen to audio stories in my free time.

                    </p>

                    <p>Currently, I am looking for an opportunity as a frontend developer to utilize my specialties. I am a team player and self-motivated, always a grasp for learning new stack. I am flexible to relocate as well.</p>
                </div>
            </div>

        </div>
    );
};

export default About;