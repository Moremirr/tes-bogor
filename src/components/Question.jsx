import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Question = ({ onYes }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [noCount, setNoCount] = useState(0);

    const noMessages = [
        "Yakin nih? 🥺",
        "Coba pikir lagi...",
        "Hati ini untukmu lho 💔",
        "Jangan gitu dong... 😢",
        "Aku akan terus mencoba! 💪"
    ];

    const moveButton = () => {
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        setPosition({ x: randomX, y: randomY });
        setNoCount(prev => Math.min(prev + 1, noMessages.length - 1));
    };

    return (
        <div className="glass-container question-container">
            <div className="heart-decoration">💗</div>
            <h2>Maukah kamu menjadi ceweku?</h2>
            <div className="romantic-poem">
                <p>Setiap hari, aku memikirkanmu...</p>
                <p>Setiap malam, aku memimpikanmu...</p>
                <p>Kamu adalah alasanku tersenyum ✨</p>
            </div>
            <p className="question-subtitle">
                Jadilah bagian dari hidupku? 🌹
            </p>
            <div className="button-container">
                <button className="btn btn-primary btn-yes" onClick={onYes}>
                    Ya, Aku Mau! 💖
                </button>
                <motion.button
                    className="btn btn-secondary"
                    animate={position}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onMouseEnter={moveButton}
                    onTouchStart={moveButton}
                    style={{ position: 'relative', zIndex: 10 }}
                >
                    {noMessages[noCount]}
                </motion.button>
            </div>
        </div>
    );
};

export default Question;
