import { Event } from "../models/event.js"
import axios from "axios"



const createComment = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        event.comments.push(req.body)
        await event.save()
        const newComment = event.comments[event.comments.length - 1]
        return res.status(201).json(newComment)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const deleteComment = async (req, res) => {
    try {
        const event = await Event.findById(req.params.event_id)
        const idx = event.comments.findIndex((comment) =>
            comment.event_id.equals(req.params.comment_id)
        )
        const removedComment = event.comments.splice(idx, 1)
        await event.save()
        return res.status(200).json(removedComment)
    } catch (err) {
        res.json(err)
    }
}
// when you combine event.js controller files, be sure to also change routing

function getAllEvents (req, res) {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=100&sort=random&apikey=${process.env.API_KEY}`)
    .then(response => {
        res.json(response.data)
    })
}

function getEventsByPostalCode (req,res) {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=${req.params.size}&postalCode=${req.params.postalCode}&apikey=${process.env.API_KEY}`)
    .then(response => {
        res.json(response.data)
    })
}

export {
    createComment,
    deleteComment,
    getAllEvents,
    getEventsByPostalCode,
}