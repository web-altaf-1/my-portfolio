import React from 'react';
import './Resume.css';
import resume from '../../asset/files/resume.pdf'

const Resume = () => {

    const DownloadFile = (fileName) => {
        fetch(fileName).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })

    }
    const handleGoogleDriveResume = () => {
        window.open('https://drive.google.com/file/d/1Y1X6uoI0J7W4rc5YWsVMBeDm-sblJwCP/view?usp=sharing','_blank')
    }

    return (
        // Resume button or others details here 
        <div data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="700" className='resume-container' >

            <button onClick={() => DownloadFile(resume)} className='resume-first '>Download Resume</button>
            <button onClick={handleGoogleDriveResume} className='resume-second '>Google Drive Resume</button>

        </div>
    );
};

export default Resume;