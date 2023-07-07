import { useState, useEffect } from 'react';
import words from '../constants/words.json';

// const words = ['happy', 'fulfilling', 'wonderful', 'satisfying', 'cheerful'];

function LifeQuote() {
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setCurrentWord(randomWord);
        }, 1000);

        // Clean up function
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

    return (
        <div className="pt-8 text-secondary-focus">
            <div className="inline-block mr-2 font-mono">Live a </div>
            <div className="bold-200 underline decoration-indigo-500 text-primary-focus font-mono inline-block overflow-auto w-28 align-bottom animate animate-bounce">{currentWord ? currentWord : "happy"}</div>
            <div className="inline-block ml-2 font-mono">life</div>
        </div>
    );
}

export default LifeQuote;