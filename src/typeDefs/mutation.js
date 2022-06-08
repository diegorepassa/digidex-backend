import { gql } from "apollo-server";

const mutation = gql`
   type Mutation {
      createDigimon(digimon: DigimonInput): Digimon
      updateDigimon(id: ID!, digimon: DigimonInput): Digimon
      deleteDigimon(id: String): Digimon
   }
   input DigimonInput {
      name: String
      img: String
      level: String
   }
`;

export default mutation;