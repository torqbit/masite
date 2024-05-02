import './Nav.css'

export default function Nav({ links }) {

    return (<header>
        <nav>
            <ul className="nav-links">
                {links.map((link, index) => (<li key={index}>
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>))
                }
            </ul>
        </nav>
    </header>)
}