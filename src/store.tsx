export type StoreType = {
    skills: SkillType[]
    portfolio: PortfolioType[]
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
    link: string
}

export const store: StoreType = {skills: [{id: 1, skill: 'HTML & CSS', description: 'Like to use flex methods.'},{id: 2, skill: 'JavaScript', description: 'Good programming language… but TypeScript is just the best!'},{id: 3, skill: 'TypeScript', description: 'This is the best programming language to know. I have a very good skills here.'},{id: 4, skill: 'React', description: 'I am focused here. So here is my way!'},{id: 5, skill: 'Redux', description: 'If you see this portfolio, it means that I already have good knowledge here.'},], portfolio: [{id: 1, name: 'To Do list', description: 'The main project I have been made using TypeScript and React', link: 'https://tonyfinder.github.io/Todolist/'},{id: 2, name: 'Social network', description: 'Introducing of my code using TypeScript and React', link: 'https://tonyfinder.github.io/React-Samurai/'},{id: 3, name: 'Pedicure goods', description: 'This app was made for personal use only', link: 'https://tonyfinder.github.io/Pedicure_Goods/'},],}