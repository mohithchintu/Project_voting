import React, { useContext } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

const Admin = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            authContext.setIsAuthenticated(false);
            navigate('/admin_login');
        } catch (error) {
            console.error("Sign out error: ", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 gap-4">
                    <button
                        onClick={() => navigate('/can_res')}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg"
                    >
                        Election Registration
                    </button>
                    <button
                        onClick={() => navigate('/leadbord')}
                        className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg"
                    >
                        Winner Declaration
                    </button>
                    <button
                        onClick={handleSignOut}
                        className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Admin;
