import './Articles.css'

export default function Articles({ articles }) {

    return (<section id="articles">
        <article>
            <h2>Articles</h2>
            {articles.map((article, index) => (<Article key={index} article={article} />))}
        </article>
    </section>
    )
}

function Article({ article }) {
    return (
        <article>
            <div>{article.datePublished}</div>
            <h4>{article.title}</h4>
            <p>{article.description}
            </p>
            <a href={article.link}>
                Read More
            </a>
        </article>
    )
}