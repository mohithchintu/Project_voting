import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../App';

const AdminLogin = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            authContext.setIsAuthenticated(true);

            navigate('/admin');
        } catch (error) {
            console.error("Login error: ", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Admin Account Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input name="email" type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    </div>
                    <div className="mb-4">
                        <input name="password" type="password" placeholder="Password" className="w-full border p-2 rounded" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover-bg-blue-600">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
