import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import './Project.css';

const Project = (props) => {
    const [isLoading3,setIsLoading3] = useState(false);
    const [data,setData] = useState({})

    const navigate = useNavigate();   // react useNavigate hooks 

    // props distracturing 
    const { _id, name, img } = props.data;

    const handleProjectDetails = (id) => {
        navigate(`/projects/${id}`)
    };

    const hanldeLiveSiteLink=()=>{
        window.open(
            data?.livesite,
            '_blank'
        )

    }

    // single project load by id 

    useEffect(() => {

        setIsLoading3(true)    // loading true 
        const url = `https://react-portfolio-server-production.up.railway.app/all-project/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading3(false);   // loading false 
            });

    }, [_id]);


    


    return (
        <Card data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1300" className='p-3 project-card ' style={{ width: 'auto' }}>
            <Card.Img className='img-fluid project-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='text-white'>{name}</Card.Title>

            </Card.Body>

            <Card.Body className='d-flex'>
                <button onClick={() => handleProjectDetails(_id)} className="custom-btn project-button">Details</button>
                <button onClick={()=> hanldeLiveSiteLink(_id)} className="custom-btn project-button">Live</button>

            </Card.Body>
        </Card>
    );
};

export default Project;