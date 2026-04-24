import { useEffect, useState } from "react";

export function useTypedText(words, speed = 100, pause = 1000) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[index];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + currentWord[charIndex]);
                setCharIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }

        const pauseTimeout = setTimeout(() => {
            setText("");
            setCharIndex(0);
            setIndex((prev) => (prev + 1) % words.length);
        }, pause);

        return () => clearTimeout(pauseTimeout);
    }, [charIndex, index, words, speed, pause]);

    return text;
}
