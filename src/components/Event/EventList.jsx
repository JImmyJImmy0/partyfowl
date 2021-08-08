import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Event.module.css'

// Components
import EventCard from './EventCard'


const EventList = (props) => {
// assuming/setting props as an array of pre-populated event objects

    console.log('EVENT LIST!!')

    return (
        <div className="event-list">
            {props?.map((event) => (
                <EventCard
                    key={event._id}
                    event={event}
                    {...props}
                />
            ))}
        </div>
    )
}

export default EventList