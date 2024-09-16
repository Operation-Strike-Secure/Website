import React, { useState } from "react";
import {TextField, Button, Link} from "@mui/material";

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
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 6; // Simple vérification de la longueur du mot de passe
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            setError("Veuillez remplir tous les champs");
        } else if (!validateEmail(email)) {
            setError("Email non valide");
        } else if (!validatePassword(password)) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
        } else if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
        } else {
            setError("");
            console.log("Inscription réussie");
            // Appelle l'API d'inscription ici
        }
    };

    return (
        <div className="py-10 flex items-center justify-center">
            <div className="bg-blue-background p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                <h1 className="text-3xl text-transparent bg-clip-text bg-nav-gradient font-bold mb-6 text-center">INSCRIPTION</h1>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <TextField
                            label="Prénom"
                            variant="outlined"
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            sx={mySX}
                        />
                        <TextField
                            label="Nom"
                            variant="outlined"
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            sx={mySX}
                        />
                    </div>
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
                        className={"inline-block bg-nav-gradient text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold"}>
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