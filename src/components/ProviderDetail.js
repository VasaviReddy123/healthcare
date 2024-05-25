import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProviderDetail.css'; // Ensure you have the CSS file for styling

const ProviderDetail = () => {
    const { id } = useParams();
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/providers/${id}/`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched provider details:", data); // Log data to verify fetching
                setProvider(data);
            })
            .catch(error => {
                console.error("There was an error fetching the provider details!", error);
            });
    }, [id]);

    if (!provider) return <div>Loading...</div>;

    return (
        <div>
            <h1>{provider.name}</h1>
            <div className="provider-detail">
                <p><strong>Specialty:</strong> {provider.specialty}</p>
                <p><strong>Location:</strong> {provider.location}</p>
                <p><strong>Availability:</strong> {provider.availability}</p>
                <p><strong>Operating Hours:</strong> {provider.operating_hours}</p>
                <p><strong>Contact Information:</strong> {provider.contact_info}</p>
            </div>
        </div>
    );
};

export default ProviderDetail;
