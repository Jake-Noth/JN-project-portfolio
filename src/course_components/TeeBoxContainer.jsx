import React from 'react';

export default function TeeBoxContainer() {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="teebox-container">
            <div className="tee-content-container">
                <div id="tee-content">
                    <img id="my-picture" src="public/mypicture.png" alt="My Picture" />
                    <h1 id="home-sentence">Hello, I'm Jake. I'm an aspiring software developer.</h1>
                </div>
                <button id="my-work-button" onClick={scrollDown}>View my work</button>
            </div>
        </div>
    );
}
