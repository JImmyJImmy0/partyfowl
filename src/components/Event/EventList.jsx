import React from 'react'

// Components
import EventCard from './EventCard'



const EventList = (props) => {
    const {eventsArray} = props
    console.log(props)
    //my job is to map through the event data
    return (
        <div className="event-list">
            {eventsArray?.map((event) => (
                <EventCard
                    key={event.id}
                    event={event}
                    {...props}
                />
            ))}
        </div>
    )
}

export default EventList