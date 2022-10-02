import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from '../../components/Shared/Loading/Loading';

const ProjectDetail = () => {
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();  // get id by useParams 


    
    // single project load by id 

    useEffect(() => {

        setIsLoading(true)    // loading true 
        const url = `https://react-portfolio-server.onrender.com/all-project/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProject(data);
                setIsLoading(false);   // loading false 
            });

    }, []);


    // loading components 
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleLiveLink = (link) => {
        window.open(
            `${link}`,
            '_blank'
        );
    }
    const handleGithubLink = (link) => {
        window.open(
            `${link}`,
            '_blank'
        );
    }
    const handleServerLink = (link) => {
        window.open(
            `${link}`,
            '_blank'
        );
    }

    return (
        <div className='container project-details-container'>
            <div data-aos="zoom-in-right" className=' project-img-container'>
                <img width='400px' height='400px' className='m-auto ' src={project.img} alt="images" />

            </div>
            <div data-aos="zoom-in-left" className='p-3 project-content'>
                <h3>{project.name}</h3>
                <p>{project?.details}</p>
                <h3>Tools:</h3> <br />
                <div className='tools-container'>
                    {/* project tools array map and showerd all tools  */}
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
                        {project?.tools?.slice(project?.tools?.length / 2, project?.tools?.length).map((tool, index) => (
                            <li
                                key={index}
                                className="hover:text-secondary duration-500 border-b-gray-300 border-dashed border-b-2"
                            >
                                {tool}
                            </li>
                        ))}

                    </ul>
                </div>
                
                {/* project buttons   */}
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='d-flex'>
                    <button onClick={() => handleGithubLink(project.github)} className="custom-btn project-button">GitHub</button>
                    {project.server === '' ? <></> : <button onClick={() => handleServerLink(project.server)} className="custom-btn project-button">Server</button>}
                    <button onClick={() => handleLiveLink(project.livesite)} className="custom-btn project-button">Live</button>
                </div>
            </div>
        </div >
    );
};

export default ProjectDetail;