import React from 'react';
import './Presentation.css';

export default function Presentation({ presentations }) {
    return (
        <section className="presentations">
            <h2>Presentations</h2>
            <div>
                {presentations.map((presentation, index) => (
                    <PresentationItem presentation={presentation} key={index} />
                ))}
            </div>
        </section>
    );
}

function PresentationItem({ presentation }) {
    return (
        <div>
            <div className="presentation-video">
                <img src={presentation.thumbnail} alt={presentation.title} />
                <a href={presentation.videoLink} target="_blank">
                    <img src="img/play-button.png" alt="Play" />
                </a>
            </div>
            <div>
                <h4>{presentation.title}</h4>
                <p>{presentation.dateOfTalk}</p>
            </div>
        </div>
    );
}