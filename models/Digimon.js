import mongoose from "mongoose";

const DigimonSchema = new mongoose.Schema({
    name: String,
    img: String,
    level: String
});

const Digimon = mongoose.model("Digimon", DigimonSchema);

export default Digimon;