type TPost = {
    id: number
    image: string
    date: string
    time: string
    title: string
    description: string
}

const PostsList: TPost[] = [
    {
        id: 0,
        image: '/images/blog/1.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: 'Ambulance Booking App development',
        description: "Almost everything has an opposition and popularity is not an exception. Web-developers always want to learn new trends in order to provide their clients with …"
    },

    {
        id: 1,
        image: '/images/blog/2.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: 'Electronic Medical Record Prices',
        description: "It is probably not a secret that WordPress provide traditional themes for users from all over the world. If you decided to ..."
    },

    {
        id: 2,
        image: '/images/blog/3.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: '13 Healthcare App Mobile Trends 2021',
        description: "What is Healthcare App Development?"
    },
    
    {
        id: 3,
        image: '/images/blog/4.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: 'Vue.js vs React. What to choose for your business project',
        description: "Almost everything has an opposition and popularity is not an exception. Web-develop..."
    },

    {
        id: 4,
        image: '/images/blog/5.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: 'React Development',
        description: "Almost everything has an opposition and popularity is not an exception. Web-develop..."
    },

    {
        id: 5,
        image: '/images/blog/6.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: 'Antitrends',
        description: "Almost everything has an opposition and popularity is not an exception. Web-develop..."
    },

    {
        id: 6,
        image: '/images/blog/7.png',
        date: '25.12.2020',
        time: '6 minutes',
        title: 'Antitrends',
        description: "Almost everything has an opposition and popularity is not an exception. Web-develop..."
    }

]

export default PostsList