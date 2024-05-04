import React from 'react';
import './footer.css';

export default function Footer({ links, author }) {
    return (
        <footer>
            {links.map((link, index) => (
                <a key={index} href={link.url}>
                    {link.text}
                </a>
            ))}
            <div className="cpyright">
                &copy; {new Date().getFullYear()} {author}. All rights reserved
            </div>
        </footer>
    );
}
