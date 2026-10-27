
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://movie-garage-1.onrender.com/login", {
        username,
        password
    })
    .then((response) => {
        if (response.data === "Login successful") {
            navigate("/home");
        }
    })
    .catch((error) => {
        alert(error.response?.data || "Login failed");
    });
};
    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="w-full max-w-md rounded-lg bg-zinc-900 p-8 shadow-2xl">
                <h1 className="mb-8 text-4xl font-extrabold text-red-600">
                    The Movie Garage
                </h1>

                <h2 className="mb-6 text-3xl font-bold text-white">
                    login In
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full rounded-md border border-zinc-600 bg-zinc-800 p-4 text-white outline-none placeholder:text-gray-400 focus:border-red-600"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-md border border-zinc-600 bg-zinc-800 p-4 text-white outline-none placeholder:text-gray-400 focus:border-red-600"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-md bg-red-600 py-3 font-bold text-white transition hover:bg-red-700 active:scale-95"
                    >
                        login In
                    </button>
                </form>

                <p className="mt-6 text-gray-400">
                    New to The Movie Garage?{" "}
                    <button
                        type="button"
                        onClick={() => navigate("/signup")}
                        className="font-semibold text-white hover:underline"
                    >
                        Sign up now
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
