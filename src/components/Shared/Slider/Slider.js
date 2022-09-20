import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import SocialButton from '../SocialButton/SocialButton';

const Slider = () => {

    const [text] = useTypewriter({
        words: ['Web Developer', 'ReactJs Developer'],
        loop:  true,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
    })
    return (
        <div className='home-page'>
            <div className='main-page'>
                <h2 style={{ fontSize: '4rem', fontWeight: '700' }} className=''>Md Altaf Hossen</h2>
                <h4 style={{ fontWeight: '700', fontSize: 'xx-large' ,marginBottom:'20px'}}><span>I'm </span><span style={{color:'#51ff51'}}>
                    {
                        text
                    }
                    <Cursor />
                    </span>
                </h4>
                <SocialButton></SocialButton>
            </div>
            
        </div>
    );
};

export default Slider;