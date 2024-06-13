"use client";

import React, { useState } from 'react';

const HomePage: React.FC = () => {
    const [message, setMessage] = useState('');

    const startCronJob = async () => {
        try {
            const response = await fetch('/api/cron');
            const result = await response.json();
            if (response.ok) {
                setMessage(result.message);
            } else {
                setMessage(result.error);
            }
        } catch (error) {
            console.error('Failed to start cron job:', error);
            setMessage('Failed to start cron job');
        }
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <button onClick={startCronJob}>Start Cron Job</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default HomePage;
