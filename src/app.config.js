const appConfig = {
    links: ["Home", "Articles", "Projects", "Presentations"],
    
    about: {
        name: "Shad",
        img: "https://placehold.co/160x160",
        title: "Software Engineer",
        description: "Passionate Open source developer",
        socialLinks: {
            instagram: "https://instagram.com/shad",
            linkedin: "https://linkedin.com/shadamez",
            youtube: "https://youtube.com/@torqbit",
            github: "https://github.com/shad"
        }
    },
    articles: [
        {
            title: "Clean navigation using HTML & CSS",
            datePublished: "12th Dec, 2023",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
            link: "https://medium.com/u/link1"
        },
        {
            title: "Clean navigation using HTML & CSS",
            datePublished: "12th Dec, 2023",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.",
            link: "https://medium.com/u/link2"
        },
    ],
    projects:[
        {
            img:"./img/vegking.png",
            name:"Vegking",
        },
        {
            img:"./img/carstats.png",
            name:"Carstats",
        },
        {
            img:"./img/bloguikit.png",
            name:"Blog UI Kit"
        },
        {
            img:"./img/webmonitor.png",
            name:"Web Monitor",
        }
    ],
    presentations: [
        {
            title: "A Talk on Optimizing CSS for performance",
            dateOfTalk: "November 13, 2023",
            thumbnail: "img/presentation-01.png",
            videoLink: "https://www.youtube.com/watch?v=Fkd9TWUtFm0&pp=ygUbdGVkeCB0YWxrcyB3ZWIgZGV2ZWxvcG1lbnQg"
        },
        {
            title: "Make responsive website for ecommerce",
            dateOfTalk: "December 13, 2023",
            thumbnail: 'img/presentation-02.png',
            videoLink: 'https://www.youtube.com/watch?v=-jRREn6ifEQ&pp=ygUbdGVkeCB0YWxrcyB3ZWIgZGV2ZWxvcG1lbnQg'
        }
    ],
    footer: {
        author: ""
    }
}

export default appConfig;