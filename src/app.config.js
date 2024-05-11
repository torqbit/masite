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
            link:"https://www.google.com/",
        },
        {
            img:"./img/carstats.png",
            name:"Carstats",
            link:"https://www.google.com/",
        },
        {
            img:"./img/bloguikit.png",
            name:"Blog UI Kit",
            link:"https://www.google.com/",
        },
        {
            img:"./img/webmonitor.png",
            name:"Web Monitor",
            link:"https://www.google.com/",
        },
    ],
    presentations: [
        {
            title: "A Talk on Optimizing CSS for performance",
            date: "November 13, 2023",
            imgSrc: "img/presentation-01.png",
            playBtnImgSrc: "img/play-button.png"
        },
        {
            title: "Make responsive website for ecommerce",
            date: "December 13, 2023",
            imgSrc: 'img/presentation-02.png',
            playBtnImgSrc: 'img/play-button.png'
        }
    ],
    footer: {
        author: ""
    }
}

export default appConfig;