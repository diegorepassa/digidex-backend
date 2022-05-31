import mongoose from "mongoose";

const DigimonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    attribute: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    moves: {
        type: Array,
        required: true
    }
})

const Digimon = mongoose.model("Digimon", DigimonSchema);

export default Digimon;