import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./TicketDetail.css";

import Logo from '../assets/Logo.svg';

export const TicketDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, text } = location.state;

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<{ id: number, text: string, timestamp: number }[]>([]);
  const [replyIdCounter, setReplyIdCounter] = useState(0);

  const handleCreateTicketClick = () => {
    navigate("/creation-ticket");
  };

  const handleTicketCourClick = () => {
    navigate("/ticket-cour");
  };

  const handleReplyClick = () => {
    setShowReplyBox((prevShowReplyBox) => !prevShowReplyBox);
  };

  const handleDeleteReply = (replyId: number) => {
    setReplies(replies.filter(reply => reply.id !== replyId));
  };

  const handleSendReply = () => {
    if (replyText.trim()) {
      const newReply = {
        id: replyIdCounter,
        text: replyText,
        timestamp: Date.now()
      };
      setReplies([...replies, newReply]);
      setReplyIdCounter(replyIdCounter + 1);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="rectangle-blanc">
          <img src={Logo} alt="Logo" className="left-image" />
          <button className="lien-actif-2" onClick={handleTicketCourClick}>Ticket en cours</button>
          <div className="center-text">Mes tickets</div>
          <button className="create-ticket-button" onClick={handleCreateTicketClick}>Créer un ticket</button>
        </div>
        <div className="rectangle-text-2">
          <div className="ticket-detail-page">
            <h1>{title}</h1>
            <p>{text}</p>
            <div className="reply-section">
              <FontAwesomeIcon
                icon={faReply}
                size="2x"
                className="reply-icon"
                onClick={handleReplyClick}
              />
            </div>
          </div>
          {replies.map(reply => (
            <div key={reply.id} className="replies-section">
              <p className="reply-timestamp">{new Date(reply.timestamp).toLocaleString()}</p>
              <p className="reply-text">
                {reply.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== reply.text.split('\n').length - 1 && <br />} {/* Ajouter un <br> sauf pour la dernière ligne */}
                  </React.Fragment>
                ))}
                <div className="reply-section">
                  <FontAwesomeIcon
                    icon={faReply}
                    size="2x"
                    className="reply-icon"
                    onClick={handleReplyClick}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="2x"
                    className="trash-icon"
                    onClick={() => handleDeleteReply(reply.id)} // Ajoutez la fonction handleDeleteReply pour gérer la suppression du message
                  />
                </div>
              </p>
            </div>
          ))}
          {showReplyBox && (
            <div className="reply-box">
              <textarea
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={handleKeyDown}
              ></textarea>
              <button onClick={handleSendReply}>Send</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
