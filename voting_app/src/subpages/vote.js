import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const usersCollection = collection(db, 'data');
            const querySnapshot = await getDocs(usersCollection);

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.username === form.username && data.password === form.password) {
                    setEmail(data.Email);
                    setError(null);
                    navigate('/verify', { state: { email: data.Email, username: form.username } });

                    return;
                }
            });

            if (!email) {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div className="m-9 bg-white p-8 rounded shadow-2xl w-96">
                    <h1 className="text-2xl font-bold text-center mb-4">Login To Vote</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-blue-900">Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                className="border w-full px-4 py-2 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-blue-900">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="border w-full px-4 py-2 rounded-md"
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            className="bg-blue-500 hover-bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
