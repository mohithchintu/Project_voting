import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';

function ElectionRegistration() {
    const [form, setForm] = useState({
        party_name: '',
        candidate_name: '',
    });

    const [logo, setLogo] = useState(null);
    const [progress, setProgress] = useState(0);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleLogoChange = (e) => {
        if (e.target.files[0]) {
            setLogo(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.party_name || !form.candidate_name || !logo) {
            alert('Please fill in all fields and upload a logo.');
            return;
        }

        try {
            const storageRef = ref(storage, `party_logos/${logo.name}`);
            const uploadTask = uploadBytesResumable(storageRef, logo);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                },
                (error) => {
                    console.error('Error uploading logo:', error);
                },
                async () => {
                    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

                    const registrationData = {
                        party_name: form.party_name,
                        candidate_name: form.candidate_name,
                        no_of_votes: 0,
                        party_logo: downloadUrl,
                    };

                    const docRef = await addDoc(collection(db, 'election_participants'), registrationData);
                    console.log('Document written with ID: ', docRef.id);

                    setForm({ party_name: '', candidate_name: '' });
                    setLogo(null);
                    setProgress(0);

                    setRegistrationSuccess(true);
                }
            );
        } catch (error) {
            console.error('Error registering participant:', error);
            alert('An error occurred while registering. Please try again.');
        }
    };

    return (
        <div className="container mx-auto mt-10 p-5">
            {registrationSuccess ? (
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-green-600 mb-6">Registration Successful!</h1>
                    <p className="text-lg text-gray-700">Thank you for registering.</p>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold text-center mb-6">Election Participant Registration</h1>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="party_name" className="block text-gray-600">Party Name:</label>
                            <input
                                type="text"
                                id="party_name"
                                name="party_name"
                                value={form.party_name}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="candidate_name" className="block text-gray-600">Candidate Name:</label>
                            <input
                                type="text"
                                id="candidate_name"
                                name="candidate_name"
                                value={form.candidate_name}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="logo" className="block text-gray-600">Party Logo:</label>
                            <input
                                type="file"
                                id="logo"
                                name="logo"
                                onChange={handleLogoChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Register
                        </button>
                    </form>
                    {progress > 0 && (
                        <p className="text-center mt-4">Uploading: {progress}%</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ElectionRegistration;
