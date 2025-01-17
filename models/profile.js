import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const eventsAttending = new 

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://i.imgur.com/18icxdq.jpg",
    },
    events_attending: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    events_saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}],
}, { timestamps: true})

const Profile = mongoose.model('Profile', profileSchema)

export {
    Profile
}

