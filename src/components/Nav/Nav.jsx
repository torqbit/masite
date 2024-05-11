import styles from '@/styles/Nav.module.css'

export default function Nav({ links }) {

    return (<header>
        <nav className={styles.main}>
            <ul className={styles.nav__links}>
                {links.map((link, index) => (<li key={index}>
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>))
                }
            </ul>
        </nav>
    </header>)
}