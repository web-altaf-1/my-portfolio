import React, { useEffect, useState } from 'react';

const UseProject = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const url = "http://localhost:4000/all-project"
        
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false)
            });

    }, [])
    return [projects, isLoading]

};

export default UseProject;