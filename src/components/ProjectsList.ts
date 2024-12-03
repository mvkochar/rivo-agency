type TProject = {
    id: number
    image: string
    year: number
    title: string
    category?: string
    desctiption?: string
    bgimage?: string
}

const ProjectsList:TProject[] = [
    {
        id: 0,
        image: '/images/projects/1.png',
        year: 2020,
        title: 'Rivo CRM',
        category: "Logistics & Distribution",
        desctiption: 'Norwegian fireplaces',
        bgimage: '/images/cover1.png'
    },
    
    {
        id: 1,
        image: '/images/projects/2.png',
        year: 2020,
        title: 'Saltmine'
    },
    
    {
        id: 2,
        image: '/images/projects/3.png',
        year: 2020,
        title: 'Odex'
    },

    {
        id: 3,
        image: '/images/projects/4.png',
        year: 2020,
        title: 'Jotul'
    },

    {
        id: 4,
        image: '/images/projects/5.png',
        year: 2020,
        title: 'Haul Cars'
    },

    {
        id: 5,
        image: '/images/projects/6.png',
        year: 2020,
        title: 'Skyline Energy'
    }
]

export default ProjectsList