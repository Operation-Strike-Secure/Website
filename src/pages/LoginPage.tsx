import React, { useState } from "react";
import { TextField, Button, Link } from "@mui/material";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Veuillez remplir tous les champs");
        } else {
            setError("");
            console.log("Connexion réussie");
        }

    };

    return (
        <div className="py-20 flex items-center justify-center">
            <div className="bg-blue-background p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h1 className="text-3xl text-transparent bg-clip-text bg-nav-gradient font-bold mb-6 text-center">CONNEXION</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{
                            input: {color: "white"},
                            label: {color: "rgba(255, 255, 255, 0.7)"},
                            "& .MuiInputLabel-shrink": {
                                color: "white",
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.5)",
                                },
                                "&:hover fieldset": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Mot de passe"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        sx={{
                            input: {color: "white"},
                            label: {color: "rgba(255, 255, 255, 0.7)"},
                            "& .MuiInputLabel-shrink": {
                                color: "white",
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.5)",
                                },
                                "&:hover fieldset": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                            },
                        }}
                    />
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <Button
                        className={"inline-block bg-nav-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold"}>
                        <h3 className={"text-blue-background"}>
                            SE CONNECTER
                        </h3>
                    </Button>
                </form>
                <p className="text-center text-white mt-4">
                    Pas encore de compte ?{" "}
                    <Link href="/register" color="inherit" underline="hover">
                        Inscrivez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;