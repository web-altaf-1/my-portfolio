import React, { useEffect, useState } from 'react';


const UseProject = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    // data load on server 
    useEffect(() => {

        const url = "https://react-portfolio-server.onrender.com/all-project"  // server url

        setIsLoading(true); //loading start
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false)  // loading stop
            });

    }, [])
    return [projects, isLoading]

};

export default UseProject;