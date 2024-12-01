import React from 'react'
import classes from './BlogsItem.module.css'

type BlogsItemProps = {
    id: number
    image: string
    date: string
    time: string
    title: string
    description: string
}

const BlogsItem = ({ id, image, date, time, title, description }: BlogsItemProps) => {
    return (
        <div>
            <div><img src={image} alt="blogs-item" /></div>
            <div className={classes.blogs_item_info}>
                <div className={classes.blogs_item_date}>{date}</div>
                <div className={classes.blogs_item_time}>{time}</div>
            </div>
            <h3 className={classes.blogs_item_title}>{title}</h3>
            <p className={classes.blogs_item_desc}>{description}</p>
            <div className={classes.blogs_item_action}>
                <div className={classes.action_name}>Read more</div>
                <a href="" className={classes.action_link}><img src="/images/arrow_icon.png" alt="arrow_icon" /></a>
            </div>
        </div>
    )
}

export default BlogsItem