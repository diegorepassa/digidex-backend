import Digimon from "../../models/Digimon.js";

const digimonResolver = {
   Query: {
      async digimons() {
         return await Digimon.find().limit(27);
      },
      async digimonById(_, { id }) {
         return await Digimon.findById(id);
      },
      async digimonsByName(_, { name }) {
         return await Digimon.find({name: name});
      },
      async digimonsByLevel(_, { level }) {
        return await Digimon.find({level: level});
      },
      async digimonByImg(_, { img }) {
        return await Digimon.find({img: img});
      }
   },
   Mutation: {
      async createDigimon(_, { digimon }) {
         const newDigimon = new Digimon(digimon);
         return await newDigimon.save();
      },
      async updateDigimon(_, { id, digimon }) {
         const updatedDigimon = await Digimon.findOneAndUpdate(id, digimon, {
            new: true,
         });
         console.log(updatedDigimon);
         return updatedDigimon;
      },
      async deleteDigimon(_, { id }) {
         const deleteDigimon = await Digimon.findByIdAndDelete(id);
         console.log(deleteDigimon);
         return deleteDigimon;
      },
   },
};

export default digimonResolver;
