import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import vm from '../assets/vm.jpg'

function Guidelines() {
    return (
        <div className="min-h-screen">
                    {/* <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${vm})` }}
                /> */}
            <Navbar />

            <div className="py-16">
                <div className="container mx-auto p-4 bg-white rounded-md">
                    <h1 className="underline text-4xl font-extrabold text-center text-black-800 mb-8">Voting Guidelines</h1>

                    <div className="prose lg:prose-xl text-black-700">
                        <h2 className="font-sans text-2xl font-bold mb-4">Introduction</h2>
                        <p>
                            Welcome to our online voting platform. We are committed to providing a secure and seamless voting experience for all users. Please take a moment to review and adhere to these guidelines.
                        </p>

                        <h2 className="font-mono underline text-2xl font-semibold mt-8 mb-4">How to Vote</h2>
                        <p>
                            To cast your vote, please follow these steps:
                        </p>
                        <ol className="list-decimal list-inside pl-4">
                            <li>Log in to your account using your username and password.</li>
                            <li>Navigate to the voting section.</li>
                            <li>Review the candidates and their information.</li>
                            <li>Select your preferred candidate.</li>
                            <li>Confirm your choice and submit your vote.</li>
                        </ol>

                        <h2 className="font-mono underline text-2xl font-semibold mt-8 mb-4">Security</h2>
                        <p>
                            Your security is our priority. We utilize advanced encryption methods to safeguard your login information and employ a range of security measures to protect your data and the integrity of the voting process.
                        </p>

                        <h2 className="font-mono underline text-2xl font-semibold mt-8 mb-4">Rules and Punishments</h2>
                        <p>
                            It's important to adhere to the following rules while using our platform:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Do not share your login credentials with anyone.</li>
                            <li>Do not attempt to manipulate the voting results or engage in any fraudulent activities.</li>
                            <li>Respect the privacy and choices of other users.</li>
                        </ul>
                        <p className="mt-4">
                            Violation of these rules may result in account suspension or other appropriate punishments as determined by the authorities under the law.
                        </p>

                        <h2 className="font-mono underline text-2xl font-semibold mt-8 mb-4">Feedback</h2>
                        <p>
                            If you encounter any issues, have questions, or wish to report violations, please don't hesitate to contact our dedicated support team at <a href="mailto:support@onlinevoting.com" className="text-blue-600 hover:underline">support@onlinevoting.com</a>.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Guidelines;