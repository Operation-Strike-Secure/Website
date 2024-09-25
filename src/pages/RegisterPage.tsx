import React, { useState } from "react";
import {TextField, Button, Link} from "@mui/material";
import {useAuth} from "../context/AuthProvider";

const mySX = {
    input: { color: "white" },
    label: { color: "rgba(255, 255, 255, 0.7)" },
    "& .MuiInputLabel-shrink": { color: "white" },
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
};

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { register } = useAuth();

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 6; // Simple vérification de la longueur du mot de passe
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Inscription en cours...");
        if (!email || !username || !password || !confirmPassword) {
            console.log("Veuillez remplir tous les champs");
            setError("Veuillez remplir tous les champs");
        } else if (!validateEmail(email)) {
            console.log("Email non valide");
            setError("Email non valide");
        } else if (!validatePassword(password)) {
            console.log("Le mot de passe doit contenir au moins 6 caractères");
            setError("Le mot de passe doit contenir au moins 6 caractères");
        } else if (password !== confirmPassword) {
            console.log("Les mots de passe ne correspondent pas");
            setError("Les mots de passe ne correspondent pas");
        } else {
            console.log("Inscription envoyée au backend ...");
            setError("");
            try {
                register(username, email, password);
                console.log("Inscription réussie");
            } catch (err) {
                setError("Échec de l'inscription. Vérifiez vos informations.");
            }
        }
    };

    return (
        <div className="py-10 flex items-center justify-center">
            <div className="bg-blue-background p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h1 className="text-3xl text-transparent bg-clip-text bg-nav-gradient font-bold mb-6 text-center">INSCRIPTION</h1>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        sx={mySX}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={mySX}
                    />
                    <TextField
                        label="Mot de passe"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        sx={mySX}
                    />
                    <TextField
                        label="Confirmer le mot de passe"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        sx={mySX}
                    />
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <Button
                        className={"inline-block bg-nav-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold"}
                        type="submit"
                    >
                        <h3 className={"text-blue-background"}>
                            S'ENREGISTER
                        </h3>
                    </Button>
                </form>
                <p className="text-center text-white mt-4">
                    Vous avez déjà un compte ?{" "}
                    <Link href="/login" color="inherit" underline="hover">
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;