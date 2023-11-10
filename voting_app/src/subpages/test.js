import React, { useState } from 'react';

const OtpTest = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [response, setResponse] = useState('');

    const handleSendOtp = async () => {
        try {
            const response = await fetch('http://localhost:5600/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp, email }),
            });


            if (response.ok) {
                setResponse('Email sent successfully');
            } else {
                setResponse('Failed to send email');
            }
        } catch (error) {
            setResponse('An error occurred while sending email.');
        }
    };

    return (
        <div>
            <h2>OTP Test Page</h2>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>OTP:</label>
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSendOtp}>Send OTP</button>
            </div>
            <div>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default OtpTest;
