import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {

        setIsLoading(true)
        const url = `http://localhost:4000/all-project/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data));
        setIsLoading(false);
    }, []);


    return (
        <div className='container project-details-container'>
            <div data-aos="zoom-in-right" className=' project-img-container'>
                <img width='400px' height='400px' className='m-auto' src={project.img} alt="images" />
            </div>
            <div data-aos="zoom-in-left" className='p-3'>
                <h3>{project?.name}</h3>
                <p>{project?.details}</p>
                <h3>Tools:</h3> <br />
                <div className='tools-container'>
                    <ul className="">
                        {project?.tools?.slice(0, project?.tools?.length / 2).map((tool, index) => (
                            <li
                                key={index}
                                className=" "
                            >
                                {tool}
                            </li>
                        ))}
                    </ul>
                    <ul className="">
                        {project?.tools?.slice(6, project?.tools?.length - 1).map((tool, index) => (
                            <li
                                key={index}
                                className="hover:text-secondary duration-500 border-b-gray-300 border-dashed border-b-2"
                            >
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='d-flex'>
                    <button className="custom-btn project-button">GitHub</button>
                    <button className="custom-btn project-button">Server</button>
                    <button className="custom-btn project-button">Live</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;