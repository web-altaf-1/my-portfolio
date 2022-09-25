import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div>
            <div className='education'>
                <div data-aos="zoom-in" className='education__heading'>
                    <h4 className='m-3'>Education</h4>
                </div>
                <div data-aos="fade-right" className='education__content'>
                    <h5><span style={{color:'#00ff00'}}>HSC</span> - Alhaj Abdur Rahman College</h5>
                    <span className='year'>2022</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam libero sapiente cumque sed, eum ipsa amet! Recusandae, harum aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, aliquid.</p>
                </div>
                <div data-aos="fade-left" className='education__content'>
                    <h5><span style={{color:'#00ff00'}}>SSC</span> - Maluher Wazedia Secondary School</h5>
                    <span className='year'>2019</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div data-aos="fade-right" className='education__content'>
                    <h5><span style={{color:'#00ff00'}}>JSC</span> - Maluher Wazedia Secondary School</h5>
                    <span className='year'>2016</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam libero sapiente cumque sed, eum ipsa amet! Recusandae, harum aut.</p>
                </div>
                <div data-aos="fade-left" className='education__content'>
                    <h5><span style={{color:'#00ff00'}}>PSC</span> - A govt Primary School</h5>
                    <span className='year'>2013</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam libero sapiente cumque sed, eum ipsa amet!</p>
                </div>
            </div>

        </div>
    );
};

export default Education;