import Digimon from "../../models/Digimon.js";

const digimonResolver = {
   Query: {
      async digimons() {
         return await Digimon.find();
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
         return await findByIdAndUpdate(id, digimon, {
            new: true,
            useFindAndModify: false,
         });
      },
      async deleteDigimon(_, { id }) {
         return await findByIdAndRemove(id, {
            useFindAndModify: false,
         });
      },
   },
};

export default digimonResolver;