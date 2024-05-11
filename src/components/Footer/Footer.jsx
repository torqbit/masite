import styles from '@/styles/Footer.module.css'

const Footer = ({ links, author }) => (
    <footer className={styles.footer}>
        <div>
            <ul>
                {links.map((link, index) => (<li key={index}><a href={`${link.toLowerCase()}`}>{link}</a></li>))}
            </ul>
            <div>
                © Copyright {author}. All rights reserved
            </div>
        </div>
    </footer>
)

export default Footer;