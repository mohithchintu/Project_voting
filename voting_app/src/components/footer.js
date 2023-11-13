import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 p-8 mt-8 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">

                    {/* Section 2: Quick Links */}
                    <div className="">
                        <h2 className="underline font-bold text-xl mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="/guidelines" className="hover:text-gray-400">Guidelines</a></li>
                            <li><a href="/register" className="hover:text-gray-400">Register</a></li>
                            <li><a href="/vote" className="hover:text-gray-400">Vote</a></li>
                        </ul>
                    </div>

                    {/*Quote*/}
                    <div className="">
                        <p className="italic leading-loose pl-4 py-2">
                            "Voting is not a right, it's a power"
                        </p>
                    </div>

                    {/* Section 3: Contact Us */}
                    <div className="">
                        <h2 className="font-bold text-xl mb-4">Contact Us</h2>
                        <ul className="space-y-2">
                            <li><strong>Contact:</strong> 6300202189</li>
                            <li><strong>Branch:</strong> CET</li>
                            <li><strong>Address:</strong> Gandipet, CBIT</li>
                        </ul>
                    </div>

                </div>

                <div className="text-center mt-8 border-t pt-6 border-gray-700">
                    <p>© 2023 | IIoT Internship Project</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
