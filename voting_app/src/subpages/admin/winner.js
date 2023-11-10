import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

function Leaderboard() {
    const [participants, setParticipants] = useState([]);

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

    const sortedParticipants = participants.sort((a, b) =>
        b.no_of_votes - a.no_of_votes
    );

    return (
        <div className="container mx-auto mt-10 p-5">
            <h1 className="text-3xl font-bold text-center mb-6">Leaderboard</h1>
            <div className="grid grid-cols-1 gap-4">
                {sortedParticipants.map((participant, index) => (
                    <div
                        key={participant.id}
                        className={`bg-white border border-gray-300 rounded p-4 shadow-lg ${index === 0 ? 'border-green-500' : ''}`}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className={`text-xl font-semibold mb-2 ${index === 0 ? 'text-green-500' : ''}`}>
                                {index + 1}. {participant.party_name}
                            </h2>
                            {index === 0 && (
                                <div className="text-3xl text-green-600">
                                    🎉🏆
                                </div>
                            )}
                        </div>
                        <div className="flex items-center">
                            <img
                                src={participant.party_logo}
                                alt={`Logo of ${participant.party_name}`}
                                className="w-8 h-8 mr-2"
                            />
                            <p className="text-lg text-gray-700">
                                Candidate: {participant.candidate_name}
                            </p>
                        </div>
                        <p className={`text-lg text-gray-700 ${index === 0 ? 'text-green-600' : ''}`}>
                            Votes: {participant.no_of_votes}
                        </p>
                        {index === 0 && (
                            <div className="text-center text-green-600 font-semibold mt-4">
                                Congratulations Winner!
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
