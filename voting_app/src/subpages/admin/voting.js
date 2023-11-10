import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Voting() {
    const [participants, setParticipants] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [voted, setVoted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const participantsCollection = collection(db, 'election_participants');
            const snapshot = await getDocs(participantsCollection);
            const participantData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setParticipants(participantData);
        };

        fetchData();
    }, []);

    const handleVote = async () => {
        if (selectedCandidate) {
            const candidateRef = doc(db, 'election_participants', selectedCandidate);
            await updateDoc(candidateRef, {
                no_of_votes: participants.find((p) => p.id === selectedCandidate).no_of_votes + 1,
            });
            setVoted(true);

            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    return (
        <div className="container mx-auto mt-10 p-5">
            <h1 className="text-3xl font-bold text-center mb-6">Election Voting Page</h1>
            {voted ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Thank you for voting!</h2>
                    <p className="text-lg text-gray-700">Your vote has been recorded.</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Candidates:</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {participants.map((participant) => (
                            <div key={participant.id} className="border p-4 rounded-lg shadow-md">
                                <img
                                    src={participant.party_logo}
                                    alt={`${participant.party_name} Logo`}
                                    className="w-20 h-20 mx-auto mb-2"
                                />
                                <p className="text-lg font-semibold">{participant.party_name}</p>
                                <p className="text-gray-600">{participant.candidate_name}</p>
                                <button
                                    onClick={() => setSelectedCandidate(participant.id)}
                                    className={`w-full mt-4 p-2 rounded-md ${selectedCandidate === participant.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white'
                                        }`}
                                    disabled={selectedCandidate !== ''}
                                >
                                    {selectedCandidate === participant.id ? 'Selected' : 'Vote'}
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedCandidate && (
                        <button
                            onClick={handleVote}
                            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                        >
                            Vote
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Voting;
