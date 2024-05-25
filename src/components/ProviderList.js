import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProviderList.css'; // Ensure you have the CSS file for styling

const ProviderList = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/providers/')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched providers:", data); // Log data to verify fetching
                setProviders(data);
            })
            .catch(error => {
                console.error("There was an error fetching the providers!", error);
            });
    }, []);

    return (
        <div>
            <h1>Healthcare Providers</h1>
            <ul className="provider-list">
                {providers.map(provider => (
                    <li key={provider.id} className="provider-item">
                        <Link to={`/providers/${provider.id}`}>
                            <div className="provider-info">
                                <strong>Name:</strong> {provider.name} <br />
                                <strong>Specialty:</strong> {provider.specialty} <br />
                                <strong>Location:</strong> {provider.location} <br />
                                <strong>Availability:</strong> {provider.availability} <br />
                                <strong>Operating Hours:</strong> {provider.operating_hours} <br />
                                <strong>Contact Info:</strong> {provider.contact_info} <br />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProviderList;
