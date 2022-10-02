import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    
    const navigate = useNavigate();   // react useNavigate hooks 
    
    // props distracturing 
    const { _id, name, img } = props.data;

    const handleProjectDetails=(id)=>{
        navigate(`/projects/${id}`)
    }
    return (
        <Card data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1300" className='p-3 project-card ' style={{ width: 'auto'}}>
            <Card.Img className='img-fluid project-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='text-white'>{name}</Card.Title>
                
            </Card.Body>
            
            <Card.Body className='d-flex'>
            <button onClick={()=> handleProjectDetails(_id)} className="custom-btn project-button">Details</button>
            <button className="custom-btn project-button">Live</button>

            </Card.Body>
        </Card>
    );
};

export default Project;