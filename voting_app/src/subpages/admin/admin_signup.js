import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { auth } from "../../firebase";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await auth.createUserWithEmailAndPassword(email.value, password.value);
            history.push("/admin");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Create Admin Account</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <input name="email" type="email" placeholder="Email" className="w-full border p-2 rounded" />
                        </div>
                        <div className="mb-4">
                            <input name="password" type="password" placeholder="Password" className="w-full border p-2 rounded" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withRouter(SignUp);