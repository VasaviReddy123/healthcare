import React, { useState } from 'react';

const ReviewForm = () => {
    const [providerId, setProviderId] = useState('');
    const [patientName, setPatientName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const reviewData = {
            provider: providerId,
            patient_name: patientName,
            rating: rating,
            comment: comment
        };

        fetch('http://127.0.0.1:8000/api/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success, e.g., clear form or notify user
        })
        .catch(error => {
            console.error('There was an error submitting the review!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Provider ID:</label>
                <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} required />
            </div>
            <div>
                <label>Patient Name:</label>
                <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
            </div>
            <div>
                <label>Rating:</label>
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required min="1" max="5" />
            </div>
            <div>
                <label>Comment:</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
