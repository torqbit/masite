// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Parser from "rss-parser";

export default async function handler(req, res) {

    let parser = new Parser();
    const parsedFeed = await parser.parseURL("https://medium.com/@shadamez/feed")
    const articles = parsedFeed.items.map(item => {
        return {
            title: item.title,
            description: item.contentSnippet,
            datePublished: item.pubDate,
            link: item.link
        }
    })
    res.status(200).json(articles);
}
