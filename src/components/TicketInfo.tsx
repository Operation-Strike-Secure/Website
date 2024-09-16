import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import PageWrapper from "../components/PageWrapper";

interface TicketInfoProps {
    ticket: any;
    goBack: () => void;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ ticket, goBack }) => {
    const [messages, setMessages] = useState([
        { author: "Utilisateur", content: "J'ai un problème avec la connexion", timestamp: "2024-09-10 10:00" },
        { author: "Support", content: "Merci, nous enquêtons sur ce problème", timestamp: "2024-09-10 12:00" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { author: "Utilisateur", content: newMessage, timestamp: new Date().toISOString() }]);
            setNewMessage("");
        }
    };

    return (
        <PageWrapper>
            <Button variant="outlined" color="primary" onClick={goBack} className="mb-4">
                Retour aux tickets
            </Button>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{ticket.objet}</h2>
                <p><strong>Date de création :</strong> {ticket.creationDate}</p>
                <p><strong>Dernière activité :</strong> {ticket.lastActivityDate}</p>
                <p><strong>Statut :</strong> {ticket.status}</p>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Discussion</h3>
                    <div className="overflow-y-auto h-48 bg-gray-800 p-4 rounded-lg mb-4">
                        {messages.map((message, index) => (
                            <div key={index} className="mb-2">
                                <p>
                                    <strong>{message.author} :</strong> {message.content}
                                </p>
                                <p className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <TextField
                            label="Votre message"
                            variant="outlined"
                            fullWidth
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            sx={{
                                input: { color: "white" },
                                label: { color: "rgba(255, 255, 255, 0.7)" },
                                "& .MuiInputLabel-shrink": { color: "white" },
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
                                    "&:hover fieldset": { borderColor: "white" },
                                    "&.Mui-focused fieldset": { borderColor: "white" },
                                },
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={handleSendMessage}>
                            Envoyer
                        </Button>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default TicketInfo;