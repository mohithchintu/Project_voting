import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [otp, setOtp] = useState('');
    const [response, setResponse] = useState('');
    const { email, username } = location.state || {};

    const handleSendOtp = async () => {
        const randomOTP = Math.floor(100000 + Math.random() * 900000);
        setOtp(randomOTP);

        try {
            const response = await fetch('http://localhost:5600/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: randomOTP, email }),
            });

            if (response.ok) {
                setResponse('OTP sent successfully');
            } else {
                setResponse('Failed to send OTP');
            }
        } catch (error) {
            setResponse('An error occurred while sending OTP.');
        }
    };

    const handleVerifyOTP = () => {
        if (otp.toString() === enteredOTP) {
            setResponse('OTP verification successful');
            navigate('/voting');
        } else {
            setResponse('OTP verification failed');
        }
    };

    const [enteredOTP, setEnteredOTP] = useState('');

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-center mb-4 text-blue-600">Verify Page</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg">Email: {email}</p>
                <p className="text-lg">Username: {username}</p>
                {response !== 'OTP sent successfully' ? (
                    <button
                        onClick={handleSendOtp}
                        className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold mt-4"
                    >
                        Send OTP
                    </button>
                ) : (
                    <div>
                        <label>Enter OTP:</label>
                        <input
                            type="text"
                            value={enteredOTP}
                            onChange={(e) => setEnteredOTP(e.target.value)}
                            className="border w-full px-4 py-2 rounded-md"
                        />
                        <button
                            onClick={handleVerifyOTP}
                            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold mt-4"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}
            </div>
            <div>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default Verify;
