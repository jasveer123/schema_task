const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    contact: {
        type: String,
    },
    subjects: [String],
    class: {
        type: String,
        required: true
    },
    societies:[String],
    year: {
        type: Number,
    }
})


const MenRanking = new mongoose.model("MenRanking",studentSchema)

module.exports = MenRanking;