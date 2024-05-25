import React, { useState } from 'react';

const AppointmentForm = () => {
    const [patientName, setPatientName] = useState('');
    const [providerId, setProviderId] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const appointmentData = {
            patient_name: patientName,
            provider: providerId,
            appointment_date: appointmentDate,
            email: email,
            phone_number: phoneNumber
        };

        fetch('http://127.0.0.1:8000/api/appointments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appointmentData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success, e.g., clear form or notify user
        })
        .catch(error => {
            console.error('There was an error scheduling the appointment!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Patient Name:</label>
                <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
            </div>
            <div>
                <label>Provider ID:</label>
                <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} required />
            </div>
            <div>
                <label>Appointment Date:</label>
                <input type="datetime-local" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <button type="submit">Schedule Appointment</button>
        </form>
    );
};

export default AppointmentForm;
