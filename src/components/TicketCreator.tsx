import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface TicketCreatorProps {
    close: () => void;
}

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

const TicketCreator: React.FC<TicketCreatorProps> = ({ close }) => {
    const [objet, setObjet] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleCreate = () => {
        // Logique de création de ticket avec la pièce jointe
        console.log("Ticket créé :", { objet, description, file });
        close();
    };

    return (
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Créer un nouveau ticket</h2>
            <form className="flex flex-col gap-4">
                <TextField
                    label="Objet"
                    variant="outlined"
                    fullWidth
                    value={objet}
                    onChange={(e) => setObjet(e.target.value)}
                    required
                    sx={mySX}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    sx={mySX}
                />
                <div>
                    <label htmlFor="file-upload" className="text-sm mb-2 block">
                        Joindre une pièce jointe :
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf,.docx"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-gray-700 file:text-gray-400 hover:file:bg-gray-600"
                    />
                    {file && <p className="mt-2 text-sm text-gray-400">Fichier sélectionné : {file.name}</p>}
                </div>
                <div className="flex justify-end gap-4 mt-4">
                    <Button variant="outlined" onClick={close}>
                        Annuler
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleCreate}>
                        Créer
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TicketCreator;
