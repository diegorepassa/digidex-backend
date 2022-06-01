import { gql } from "apollo-server";

const query = gql`
   type Query {
      digimons: [Digimon]
      digimonById(id: ID!): Digimon
      digimonsByName(name: String!): [Digimon]
      digimonsByLevel(level: String!): [Digimon]
      digimonByImg(img: String!): [Digimon]
   }
`;

export default query;
