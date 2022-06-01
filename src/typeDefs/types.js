import { gql } from "apollo-server";

const types = gql`
   type Digimon {
      id: ID!
      name: String
      img: String
      level: String
   }
`;

export default types;