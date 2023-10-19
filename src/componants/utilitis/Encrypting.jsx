import { useEffect, useRef, useState } from "react";

const EncryptingEffect = ({word = "Word"}) => {

  const TARGET_TEXT = word;
  const CYCLES_PER_LETTER = 5;
  const SHUFFLE_TIME = 50;
  
  const CHARS = "01234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN!#$%^&*():{};|,.<>/?";
  
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };
  useEffect(() => {
    scramble()
  },[]);
  useEffect(() => {
    return () => {
      stopScramble()
    }
  }, [])
  return (
        <span
        onMouseEnter={scramble}
        onMouseLeave={stopScramble} 
        >{text}</span>
  );
};

export default EncryptingEffect;