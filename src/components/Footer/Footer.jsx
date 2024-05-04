import React from 'react';
import './Footer.css';

export default function Footer({ links, author }) {
    return (
        <footer>

        <ul className="footer-links">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
            ))}
        </ul>
        <a> © Copyright {author}. All rights reserved.</a>
    </footer>
);
}