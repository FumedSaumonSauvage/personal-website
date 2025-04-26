import { useState, useEffect } from 'react';
import './homepage.css';

function LoadingScreen() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        let dotCount = 0;
        const intervalId = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            setDots('.'.repeat(dotCount));
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="app-container">
            <div className="homepage">
                <div className="words-container">
                    <span className="large-text">Simon Hergott{dots}</span>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;