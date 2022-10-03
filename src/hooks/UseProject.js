import { useEffect, useState } from 'react';

const UseProject = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // data load on server 
    const url = "https://react-portfolio-server.onrender.com/all-project"  // server url
    // const url2 = "http://localhost:4000/all-project"  // server url
    useEffect(() => {

        setIsLoading(true); //loading start
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('Loading');
                setProjects(data);
                setIsLoading(false)  // loading stop
            });

    }, [])
    return [projects, isLoading]

};

export default UseProject;