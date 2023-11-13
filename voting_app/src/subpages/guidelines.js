import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Guidelines() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <div className="py-16">
                <div className="container mx-auto p-4 bg-white shadow-md rounded-md">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Voting Guidelines</h1>

                    <div className="prose lg:prose-xl text-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p>
                            Welcome to our online voting platform. We are committed to providing a secure and seamless voting experience for all users. Please take a moment to review and adhere to these guidelines.
                        </p>

                        <h2 className="underline text-2xl font-semibold mt-8 mb-4">How to Vote</h2>
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

                        <h2 className="underline text-2xl font-semibold mt-8 mb-4">Security</h2>
                        <p>
                            Your security is our priority. We utilize advanced encryption methods to safeguard your login information and employ a range of security measures to protect your data and the integrity of the voting process.
                        </p>

                        <h2 className="underline text-2xl font-semibold mt-8 mb-4">Rules and Punishments</h2>
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

                        <h2 className="underline text-2xl font-semibold mt-8 mb-4">Feedback</h2>
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