import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Aspiring Software Engineer", "Computer Science Student", "Tech Enthusiast", "Avid Learner"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Iliyan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{currentText.split(" ")[0]}</span>{" "}
            <br />
            {currentText.split(" ").slice(1).join(" ")}
          </h1>
          <p className="hero--section-description">
            Currently looking for internhips in a wide range of fields
            <br /> such as AI/ML, Fullstack, Data Analytics
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_image.png" alt="Hero Section" className="hero_img" />
      </div>
    </section>
  );
}
