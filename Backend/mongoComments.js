import mongoose from 'mongoose'

const commentsSchema = mongoose.Schema({
    name: String ,
    body: {
        type: String
    }
})

export default mongoose.model('Comments',commentsSchema)