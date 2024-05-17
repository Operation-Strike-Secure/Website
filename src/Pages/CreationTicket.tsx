import React, { useState } from 'react';

export const CreationTicket = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ajoutez ici la logique pour créer le ticket avec le titre et le texte
        console.log('Ticket créé:', title, text);
        // Réinitialisez les champs après la création du ticket
        setTitle('');
        setText('');
    };

    return (
        <div>
            <h1>Création de ticket</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Titre:
                    <input type="text" value={title} onChange={handleTitleChange} />
                </label>
                <br />
                <label>
                    Texte:
                    <textarea value={text} onChange={handleTextChange} />
                </label>
                <br />
                <button type="submit">Créer le ticket</button>
            </form>
        </div>
    );
};

export default CreationTicket;