import './About.css'

export default function About({ name, img, title, description, socialLinks }) {

    return (<section id="home">
        <img alt='person' src={img} />
        <h2>{name}</h2>
        <p>{title}</p>
        <p>
            {description}
        </p>
        <ul class="social-links">
            <li><a href={socialLinks.youtube} target='_blank' ><img src="img/Youtube.png" alt='youtube logo' /></a></li>
            <li><a href={socialLinks.github} target='_blank' ><img src="img/GitHub.png" alt='github logo' /></a></li>
            <li><a href={socialLinks.linkedin} target='_blank'><img src="img/Linkedin.png" alt='linkedin logo' /></a></li>
            <li><a href={socialLinks.instagram} target='_blank'><img src="img/Instagram.png" alt='instagram logo' /></a></li>
        </ul>
    </section>)
}