import { useState, useEffect } from 'react';

export function TypewriterText({ 
  text, 
  speed = 100, 
  delay = 0,
  className = '',
  style = {},
  onComplete = () => {}
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Initial delay before starting
    const initialTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete();
      }
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[0.9em] ml-1 bg-current animate-pulse" style={{ animationDuration: '1s' }}></span>
      )}
    </span>
  );
}

export function TypewriterWords({ 
  words, 
  speed = 150, 
  delay = 0,
  className = '',
  style = {}
}) {
  const [displayedWords, setDisplayedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting the entire animation
    if (!hasStarted) {
      const initialTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(initialTimeout);
    }

    // Word-by-word animation after initial delay
    if (hasStarted && currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex(currentWordIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (hasStarted && currentWordIndex >= words.length && !isComplete) {
      setIsComplete(true);
    }
  }, [currentWordIndex, words.length, speed, delay, isComplete, hasStarted]);

  return (
    <span className={className} style={style}>
      {displayedWords.map((word, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in-up opacity-0"
          style={{
            animationDelay: '0ms',
            animationFillMode: 'forwards',
            animationDuration: '400ms',
            marginRight: index < displayedWords.length - 1 ? '0.25em' : '0'
          }}
        >
          {word}
        </span>
      ))}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[0.9em] ml-2 bg-current animate-pulse" style={{ animationDuration: '1s' }}></span>
      )}
    </span>
  );
}
