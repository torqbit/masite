import React from 'react';
import './Footer.css';

export default function Footer({ links, name }) {
    return (
        <footer>
        <ul className="footer-links">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
            ))}
        </ul>
        <p> @Copyright; 2024 {name}. All rights reserved.</p>
    </footer>
);
}

// function FooterContent({ links, name }) {
//     return (
  
// }

