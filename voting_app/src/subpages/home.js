import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import polling from '../assets/polling.jpeg';

function HomePage() {
    const navigate = useNavigate();

    const handleVoteNowClick = () => {
        navigate('/vote');
    };

    const handleLearnMoreClick = () => {
        navigate('/guidelines');
    };

    const handleExploreBenefits = () => {
        navigate('https://cepr.org/voxeu/columns/surprising-benefits-voting-change');
    };

    return (
        <>
            <Navbar />
            <div className="relative h-screen flex flex-col justify-center items-center text-white">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60 "
                    style={{ backgroundImage: `url(${polling})` }}
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-4 text-black">
                        Online CBIT Voting 2023
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 font-bold text-black">
                        For a more democratic CBIT future!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={handleVoteNowClick}
                            className="px-6 py-3 text-base font-semibold bg-white hover:bg-gray-100 text-blue-900 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Vote Now
                        </button>
                        <button
                            onClick={handleLearnMoreClick}
                            className="px-6 py-3 text-base font-semibold text-blue-900 border border-blue-900 hover:bg-blue-100 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <section className="bg-white-100  h-78 ">
                <div className="grid max-w-screen-xl py-28 min-h-[1rem ] px-52 w-2/2 lg:grid-cols-12   mx-auto flex flex-col justify-center items-center">
                    <div className="lg:col-span-7 flex flex-col   w-[56rem] justify-center items-center">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-blue-700 mb-4">
                            Why Choose Online Voting?
                        </h1>
                        <p className="text-lg lg:text-xl font-light text-gray-700 mb-8">
                            Secure, convenient, and accessible - online voting empowers you to make your voice heard.
                        </p>
                        <div className="flex  flex-row justify-center space-x-4">
                            <button
                                onClick={handleVoteNowClick}
                                className="px-6 py-3 text-base font-medium text-blue-700 bg-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-200 focus:ring-4 focus:ring-blue-500 "
                            >
                                Cast Your Vote
                            </button>
                            <button
                                onClick={handleExploreBenefits}
                                className="px-6 py-3 text-base font-medium text-blue-700 border border-blue-700 bg-blue-200 hover:bg-black-200 rounded-lg focus:ring-4 focus:ring-blue-500"
                            >
                                Explore Benefits
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HomePage;
