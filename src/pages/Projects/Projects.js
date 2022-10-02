import React from 'react';
import Project from '../../components/Project/Project';
import Loading from '../../components/Shared/Loading/Loading';
import UseProject from '../../hooks/UseProject';
import './Projects.css';

const Projects = () => {
    const [data,isLoading] = UseProject();

    // loading 
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-center fw-bold p-3'>All Projects :{data.length}</h3>
            <div className='all-project-card'>
                {/* all projects data maps and show all project single item  */}
                {
                    data.map((data,index) => <Project key={index} data={data}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;