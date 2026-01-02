import React from 'react';

const Welcome = ({ onStart }) => {
    return (
        <div className="glass-container floating">
            <div className="envelope-icon">💌</div>
            <h1>Hai, Cantik...</h1>
            <p className="romantic-text">
                Ada sesuatu yang sudah lama ingin aku sampaikan padamu...
            </p>
            <p className="romantic-subtitle">
                Maukah kamu membaca surat kecil ini? 💕
            </p>
            <button className="btn btn-primary" onClick={onStart}>
                Buka Surat ❤️
            </button>
        </div>
    );
};

export default Welcome;
