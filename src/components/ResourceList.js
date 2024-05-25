import React, { useEffect, useState } from 'react';

const ResourceList = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/resources/')
            .then(response => response.json())
            .then(data => {
                setResources(data);
            })
            .catch(error => {
                console.error("There was an error fetching the resources!", error);
            });
    }, []);

    return (
        <div>
            <h1>Health Programs and Services</h1>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>
                        <h2>{resource.name}</h2>
                        <p>{resource.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
