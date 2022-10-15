import todo1 from '../images/portfolio/todoFinal1.jpg'
import social from '../images/portfolio/social.jpg'
import pedicure from '../images/portfolio/pedicure3.jpg'
import question from '../images/portfolio/cards.jpg'

export type StoreType = {
    skills: SkillType[]
    portfolio: PortfolioType[]
    contacts: ContactType[]
}
export type SkillType = {
    id: number
    skill: string
    description: string
}
export type PortfolioType = {
    id: number
    name: string
    description: string
    technologies: string
    highlights: string
    demo: string
    code: string
    image: string
}
export type ContactType = {
    id: number
    title: string
    icon?: string
    info?: string
    icons?: IconsType[]
}
export type IconsType = {
    id: number
    link: string
    contactLink: string
}

export const portfolioData: StoreType = {
    skills: [
        {id: 1, skill: 'HTML & CSS', description: 'Like to use flex methods.'},
        {id: 2, skill: 'JavaScript', description: 'Good programming language… but TypeScript is just the best!'},
        {id: 3, skill: 'TypeScript', description: 'This is the best programming language to know. I have a very good skills here.'},
        {id: 4, skill: 'React', description: 'I am focused here. So here is my way!'},
        {id: 5, skill: 'Redux', description: 'If you see this portfolio, it means that I already have good knowledge here.'},
    ],
    portfolio: [
        {
            id: 1,
            name: 'Pedicure master',
            description: 'Commercial project which has been made for the pedicure master',
            technologies: 'React, Redux, TypeScript, ReactRouter, Jest, SCSS, MUI, Git, GitHub',
            highlights: 'Based on the Material UI component library. Adapted for all popular screens.',
            demo: 'https://pedicure-cabinet.ru/',
            code: 'https://github.com/TonyFinder/Pedicure-master',
            image: pedicure
        },
        {
            id: 2,
            name: 'To-Do list',
            description: 'Educational project. Developing a To-Do list',
            technologies: 'React, Redux, TypeScript, React Router, Jest, SCSS, MUI, Storybook, Axios, Postman, Formik, Redux Thunk, Git, GitHub',
            highlights: 'Good to check all the CRUD operations',
            demo: 'https://TonyFinder.github.io/Todolist/',
            code: 'https://github.com/TonyFinder/Todolist',
            image: todo1
        },
        {
            id: 3,
            name: 'Cards study',
            description: 'A team work project. An application for studying using question cards',
            technologies: 'React, Redux, TypeScript, React Router, Styled Components, Jest, SCSS, Axios, Postman, ReduxThunk, Git, GitHub',
            highlights: 'Priority of custom components. Custom form validation. Adapted for all popular screens.',
            demo: 'https://tonyfinder.github.io/Cards-study/',
            code: 'https://github.com/TonyFinder/Cards-study',
            image: question
        },
        {
            id: 4,
            name: 'Social network',
            description: 'Educational project. A plain social network.',
            technologies: 'React, Redux, TypeScript, React Router, Jest, CSS3, Storybook, Axios, Postman, Redux Form, Redux Thunk, Git, GitHub',
            highlights: 'The only project that is made using class components to understand working with classes',
            demo: 'https://tonyfinder.github.io/Social-network/',
            code: 'https://github.com/TonyFinder/Social-network',
            image: social
        },
    ],
    contacts: [
        {id: 1, title: "PHONE", icon: "fa-solid fa-phone", info: "+7 902 077 2627"},
        {id: 2, title: "EMAIL", icon: "fa-solid fa-envelope", info: "antonrozdobudko@gmail.com"},
        {id: 3, title: "TELEGRAM", icon: "fa-solid fa-paper-plane", info: "@Anton_Rozdobudko"},
        {id: 4, title: "ADDRESS", icon: "fa-solid fa-house-chimney", info: "Vladivostok, Russia"},
        {id: 5, title: "SOCIAL PROFILES", icons: [
                {id: 1, contactLink: "https://www.linkedin.com/in/anton-rozdobudko-a2622a234/", link: "https://img.icons8.com/doodle/100/000000/linkedin-circled.png"},
                {id: 2, contactLink: "https://www.instagram.com/tonyfinder", link: "https://img.icons8.com/doodle/100/000000/instagram--v1.png"},
                {id: 3, contactLink: "https://www.facebook.com/anton.rozdobudko", link: "https://img.icons8.com/doodle/100/000000/facebook-new.png"},
            ]},
    ]
}