'use client'

import { animate, utils } from 'animejs';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    animate('#titleText', {
      y: { from: -30 },
      opacity: { from: 0 },
      duration: 1000
    })

    
  }, [])

  const words = ['Text1', 'Text2', 'Text3', 'Text4'];
  const [currentWord, setCurrentWord] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 100;
    const wordPause = 1500;

    const type = () => {
      if (!isDeleting) {
        setWordIndex(wordIndex + 1)

        if (wordIndex + 1 == words[currentWord].length) {
          setTimeout(() => setIsDeleting(true), wordPause);
        }
      } else {
        setWordIndex(wordIndex - 1)

        if (wordIndex - 1 == 0) {
          setIsDeleting(false);
          setCurrentWord((currentWord + 1) % words.length);
        }
      }
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }, [wordIndex])

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="text-center " id="titleText">
          <h1 className="text-6xl font-bold">
            Title Text
          </h1>
          <h1 className="text-6xl font-bold after:content-['|'] after:ml-2 after:animate-pulse">
            {words[currentWord].substring(0, wordIndex)}
          </h1>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
