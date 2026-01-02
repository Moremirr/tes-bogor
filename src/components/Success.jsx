import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const photos = [
    '/Untitled design-54.png',
    '/Untitled design-55.png',
];

const Success = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        // Heart-shaped confetti
        const heart = confetti.shapeFromPath({
            path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        });

        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 80 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount: particleCount / 2,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#ff0a54'],
                shapes: [heart, 'circle'],
                scalar: 1.2
            });
            confetti({
                ...defaults,
                particleCount: particleCount / 2,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffb3c1', '#ff0a54'],
                shapes: [heart, 'circle'],
                scalar: 1.2
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    // Slideshow effect
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentPhoto((prev) => (prev + 1) % photos.length);
        }, 3000); // Change photo every 3 seconds

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="glass-container success-container">
            <div className="success-hearts">💕💖💕</div>
            <h1>Yeay! Kamu Mau! 🥰</h1>

            {/* Photo Slideshow */}
            <div className="photo-slideshow">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Kenangan ${index + 1}`}
                        className={`slideshow-photo ${index === currentPhoto ? 'active' : ''}`}
                    />
                ))}
                <div className="slideshow-dots">
                    {photos.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentPhoto ? 'active' : ''}`}
                            onClick={() => setCurrentPhoto(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="success-message">
                <p>Terima kasih sudah mau menjadi bagian dari hidupku...</p>
                <p className="highlight">Aku berjanji akan selalu menjagamu</p>
                <p>dan membuat setiap harimu penuh dengan kebahagiaan 💫</p>
            </div>

            <p className="final-words">
                Sekarang, kita adalah "kita" ❤️
            </p>
        </div>
    );
};

export default Success;
