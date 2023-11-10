import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

const initialState = {
    username: '',
    password: '',
    retypePassword: '',
    Phone_number: '',
    Email: ''
};

function Register() {
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [image, setImage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);
    const [notification, setNotification] = useState(null);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const navigate = useNavigate();

    const { username, password, retypePassword, Phone_number, Email } = form;

    const handleChangeImg = (e) => {
        setFile(e.target.files[0]);
        setImage(e.target.files[0]);
    };

    const uploadFile = async () => {
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setProgress(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.error('Error uploading file:', error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                    });
                }
            );
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && password && retypePassword && Phone_number && Email) {
            if (password === retypePassword) {
                const newData = { ...form, vote: false };
                try {
                    await addDoc(collection(db, 'data'), newData);
                    setRegistrationSuccess(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                } catch (error) {
                    showErrorNotification('An error occurred while creating the document.');
                }
            } else {
                showErrorNotification('Passwords do not match.');
            }
        } else {
            showErrorNotification('All fields are mandatory');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleRetypePasswordVisibility = () => {
        setShowRetypePassword((prev) => !prev);
    };

    const showErrorNotification = (message) => {
        setNotification({ type: 'error', message });
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };

    useEffect(() => {
        uploadFile();
    }, [file]);
    return (
        <>
            <Navbar />
            <div className="m-8 bg-gray-200 p-6 rounded shadow-lg">
                <h1 className="text-center text-2xl font-bold text-blue-900 mb-8">
                    Registration
                </h1>
                {registrationSuccess && (
                    <div className="notification bg-green-500 text-white text-center p-2 mb-4">
                        Registered Successfully! Redirecting to Home...
                    </div>
                )}
                {notification && (
                    <div
                        className={`notification ${notification.type === 'success'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                            } text-white text-center p-2 mb-4`}
                    >
                        {notification.message}
                    </div>
                )}
                {!registrationSuccess && (
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="w-full space-y-2">
                            <label className="block text-blue-900">Username:</label>
                            <input
                                type="text"
                                className="border w-full px-4 py-2 rounded-md"
                                placeholder="Enter Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full space-y-2">
                            <label className="block text-blue-900">Password:</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="border w-full px-4 py-2 rounded-md"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>

                        <div className="w-full space-y-2">
                            <label className="block text-blue-900">Retype Password:</label>
                            <div className="relative">
                                <input
                                    type={showRetypePassword ? 'text' : 'password'}
                                    className="border w-full px-4 py-2 rounded-md"
                                    placeholder="Retype Password"
                                    name="retypePassword"
                                    value={retypePassword}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                                    onClick={toggleRetypePasswordVisibility}
                                >
                                    {showRetypePassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        <div className="space-x-4 flex">
                            <label className="text-blue-900">Upload the Aadhar:</label>
                            <input type="file" onChange={handleChangeImg} />
                        </div>
                        <div className="w-full space-y-2">
                            <label className="block text-blue-900">
                                Phone Number:{' '}
                                <span className="italic text-gray-400">
                                    (&nbsp;Format: (+91 0000000000)&nbsp;)
                                </span>
                            </label>
                            <input
                                type="text"
                                className="border w-full px-4 py-2 rounded-md"
                                placeholder="Phone Number"
                                name="Phone_number"
                                value={Phone_number}
                                onChange={handleChange}
                            />
                            <label className="block text-blue-900">Email:</label>
                            <input
                                type="text"
                                className="border w-full px-4 py-2 rounded-md"
                                placeholder="Email"
                                name="Email"
                                value={Email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold mt-2 transition duration-300 ease-in-out"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Register;
