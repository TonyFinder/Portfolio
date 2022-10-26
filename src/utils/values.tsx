import todo1 from '../images/portfolio/todoFinal1.jpg'
import social from '../images/portfolio/social.jpg'
import pedicure from '../images/portfolio/fromSite/pedicure-2.png'
import question from '../images/portfolio/fromSite/cards.png'

export type StoreType = {
    skills: SkillType[]
    portfolio: PortfolioType[]
    contacts: ContactType[]
    aboutMe: {
        left: AboutMeType[]
        right: AboutMeType[]
        lists: {
            experience: ExperienceType[]
            education: ExperienceType[]
            skills: SkillRateType[]
        }
    }
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
    youTube?: string
}
export type ContactType = {
    id: number
    title: string
    icon?: string
    info?: string
    link?: string
    target?: boolean
    icons?: IconsType[]
}
export type IconsType = {
    id: number
    link: string
    contactLink: string
}
export type AboutMeType = {
    id: number
    info: string
    description: string
    link?: string
    target?: boolean
}
export type ExperienceType = {
    id: number
    title: string
    place: string
    dates: string
    info: string
}
export type SkillRateType = {
    id: number
    skill: string
    grade: number
}

export const portfolioData: StoreType = {
    skills: [
        {id: 1, skill: 'HTML & CSS', description: 'Like to use flex methods.'},
        {id: 2, skill: 'JavaScript', description: 'Good programming language… but TypeScript is just the best!'},
        {
            id: 3,
            skill: 'TypeScript',
            description: 'This is the best programming language to know. I have a very good skills here.'
        },
        {id: 4, skill: 'React', description: 'I am focused here. So here is my way!'},
        {
            id: 5,
            skill: 'Redux',
            description: 'If you see this portfolio, it means that I already have good knowledge here.'
        },
    ],
    portfolio: [
        {
            id: 3,
            name: 'Cards study',
            description: 'A team work project. An application for studying using question cards.',
            technologies: 'React, Redux, TypeScript, React Router, Styled Components, Jest, SCSS, Axios, Postman, ReduxThunk.',
            highlights: 'Priority of custom components. Custom form validation. Adapted for all popular screens.',
            demo: 'https://tonyfinder.github.io/Cards-study/',
            code: 'https://github.com/TonyFinder/Cards-study',
            image: question,
            youTube: "_bJh8Has7YQ"
        },
        {
            id: 1,
            name: 'Pedicure master',
            description: 'Commercial project which has been made for the pedicure master.',
            technologies: 'React, Redux, TypeScript, ReactRouter, Jest, SCSS, MUI.',
            highlights: 'Based on the Material UI component library. Adapted for all popular screens.',
            demo: 'https://pedicure-cabinet.ru/',
            code: 'https://github.com/TonyFinder/Pedicure-master',
            image: pedicure
        },
        {
            id: 2,
            name: 'To-Do list',
            description: 'Educational project. Developing a To-Do list.',
            technologies: 'React, Redux, TypeScript, React Router, Jest, SCSS, MUI, Storybook, Axios, Postman, Formik, Redux Thunk.',
            highlights: 'Good to check all the CRUD operations.',
            demo: 'https://TonyFinder.github.io/Todolist/',
            code: 'https://github.com/TonyFinder/Todolist',
            image: todo1,
        },
        {
            id: 4,
            name: 'Social network',
            description: 'Educational project. A plain social network.',
            technologies: 'React, Redux, TypeScript, React Router, Jest, CSS3, Storybook, Axios, Postman, Redux Form, Redux Thunk.',
            highlights: 'The only project that is made using class components to understand working with classes.',
            demo: 'https://tonyfinder.github.io/Social-network/',
            code: 'https://github.com/TonyFinder/Social-network',
            image: social,
        },
    ],
    contacts: [
        {id: 1, title: 'PHONE', icon: 'fa-solid fa-phone', info: '+7 902 077 2627', link: 'tel:+79020772627'},
        {id: 2, title: 'EMAIL', icon: 'fa-solid fa-envelope', info: 'antonrozdobudko@gmail.com', link: 'mailto:antonrozdobudko@gmail.com'},
        {id: 3, title: 'TELEGRAM', icon: 'fa-solid fa-paper-plane', info: '@Anton_Rozdobudko', link: 'https://t.me/Anton_Rozdobudko', target: true},
        {id: 4, title: 'ADDRESS', icon: 'fa-solid fa-house-chimney', info: 'Vladivostok, Russia', link: 'https://goo.gl/maps/JVwJ1j12hNmR3KGA9', target: true},
        {
            id: 5, title: 'SOCIAL PROFILES', icons: [
                {
                    id: 0,
                    contactLink: 'https://github.com/TonyFinder',
                    link: 'https://img.icons8.com/doodle/100/000000/github--v1.png'
                },
                {
                    id: 1,
                    contactLink: 'https://www.linkedin.com/in/anton-rozdobudko-a2622a234/',
                    link: 'https://img.icons8.com/doodle/100/000000/linkedin-circled.png'
                },

                {
                    id: 2,
                    contactLink: 'https://www.instagram.com/tonyfinder',
                    link: 'https://img.icons8.com/doodle/100/000000/instagram--v1.png'
                },
                {
                    id: 3,
                    contactLink: 'https://www.facebook.com/anton.rozdobudko',
                    link: 'https://img.icons8.com/doodle/100/000000/facebook-new.png'
                },
            ]
        },
    ],
    aboutMe: {
        left: [
            {id: 1, info: 'First Name', description: 'Anton'},
            {id: 2, info: 'Last Name', description: 'Rozdobudko'},
            {id: 3, info: 'Nationality', description: 'Russian'},
            {id: 4, info: 'Hiring', description: 'Available'},
        ],
        right: [
            {id: 1, info: 'Phone', description: '+7 902 077 2627', link: 'tel:+79020772627'},
            {id: 2, info: 'Address', description: 'Vladivostok, Russia', link: 'https://goo.gl/maps/JVwJ1j12hNmR3KGA9', target: true},
            {id: 3, info: 'Email', description: 'antonrozdobudko@gmail.com', link: 'mailto:antonrozdobudko@gmail.com'},
            {id: 4, info: 'Spoken Languages', description: 'English - Russian'},
        ],
        lists: {
            experience: [
                {
                    id: 1,
                    title: 'Frontend Developer',
                    place: 'Freelance',
                    dates: '2022',
                    info: 'Worked mostly for commercial project on pedicure product.' +
                        ' Made video editing for the pedicure online-course from scratch as well.',
                },
                {
                    id: 2,
                    title: 'Frontend Developer',
                    place: 'IT Incubator',
                    dates: '2021 - 2022',
                    info: 'Studying and creating a team project.',
                },
                {
                    id: 3,
                    title: 'Category manager',
                    place: 'DNS Retail',
                    dates: '2017 - 2021',
                    info: 'Creating a product line for private label. Working with a large amount of information and processing it using Excel.',
                },
            ],
            education: [
                {
                    id: 1,
                    title: 'Certificate',
                    place: 'It Incubator',
                    dates: '2021-2022',
                    info: 'React developer with a deep Redux and Typescript skills',
                },
                {
                    id: 2,
                    title: 'Online course',
                    place: 'Udemy',
                    dates: '2020-2021',
                    info: 'HTML and CSS',
                },

                {
                    id: 3,
                    title: 'Masters degree',
                    place: 'Far Eastern National University, Vladivostok',
                    dates: '2005 - 2010',
                    info: 'Information systems',
                },
            ],
            skills: [
                {
                    id: 1,
                    skill: 'React',
                    grade: 4.5,
                },
                {
                    id: 2,
                    skill: 'Redux',
                    grade: 4.5,
                },
                {
                    id: 3,
                    skill: 'TypeScript',
                    grade: 4.5,
                },

                {
                    id: 4,
                    skill: 'JavaScript',
                    grade: 4,
                },
                {
                    id: 5,
                    skill: 'CSS / SCSS',
                    grade: 5,
                },
                {
                    id: 6,
                    skill: 'Axios',
                    grade: 5,
                },
                {
                    id: 7,
                    skill: 'TDD',
                    grade: 5,
                },
                {
                    id: 8,
                    skill: 'Material UI',
                    grade: 4.5,
                },
                {
                    id: 9,
                    skill: 'Styled Components',
                    grade: 4.5,
                },
                {
                    id: 10,
                    skill: 'Storybook',
                    grade: 4,
                },
{
                    id: 11,
                    skill: 'Formik / Redux form',
                    grade: 4.5,
                },
                {
                    id: 12,
                    skill: 'React Router',
                    grade: 4.5,
                },
                {
                    id: 13,
                    skill: 'Redux Thunk',
                    grade: 5,
                },
{
                    id: 14,
                    skill: 'Git / GitHub',
                    grade: 4.5,
                },
                {
                    id: 15,
                    skill: 'Photoshop',
                    grade: 3.5,
                },
                {
                    id: 16,
                    skill: 'Premiere Pro',
                    grade: 4,
                },

            ]
        }
    }
}