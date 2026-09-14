import { useEffect, useState } from "react";

export function useTypedText(words, speed = 100, pause = 1000) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (done) return;

        const currentWord = words[index];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + currentWord[charIndex]);
                setCharIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }

        // Finished typing the current word
        if (index === words.length - 1) {
            // Last word done — freeze here
            setDone(true);
            return;
        }

        const pauseTimeout = setTimeout(() => {
            setText("");
            setCharIndex(0);
            setIndex(prev => prev + 1);
        }, pause);

        return () => clearTimeout(pauseTimeout);
    }, [charIndex, index, words, speed, pause, done]);

    return text;
}