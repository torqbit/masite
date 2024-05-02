import React from 'react';
import './footer.css';

export default function Footer({ links }) {
    return (
        <footer>
            {links.map((link, index) => (
                <a key={index} href={link.url}>
                    {link.text}
                </a>
            ))}
            <div className="cpyright">
                &copy; Copyright Shad Amez. All rights reserved
            </div>
        </footer>
    );
}
