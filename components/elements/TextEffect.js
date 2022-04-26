import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
const TextEffect = ({ text1, text2, text3}) => {
    return (
        <>
            <ReactTypingEffect
                text={[text1, text2, text3]}
                speed="100"
                typingDelay="200"
                eraseSpeed="50"
                eraseDelay="700"
            />
        </>
    );
};

export default TextEffect;