import { ApolloServer } from "apollo-server"
import typeDefs from "./src/typeDefs/index.js"
import resolvers from "./src/resolvers/digimonResolver.js"

import 'dotenv/config'
import mongoose from "mongoose"

// MongoDB database
const db = {
  uri: process.env.DB_URI,
}

const dbOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(db.uri, dbOption)
  .then(( () => console.log("Connected to MongoDB")))
  .catch((err) => console.log("Failed to connect to MongoDB", err))


// GraphQL server

const server = new ApolloServer({ typeDefs, resolvers })
server
  .listen({ port: process.env.DB_PORT || 4000 })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`))
  .catch(error => console.log("Server failed: ", error))