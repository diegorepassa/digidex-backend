import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import typeDefs from "./src/typeDefs/index.js";
import resolvers from "./src/resolvers/digimonResolver.js";

import "dotenv/config";
import mongoose from "mongoose";

const startServer = async () => {

  const server = new ApolloServer({ 
    playground: true,
    typeDefs, 
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault
    ]
  });

  server
    .listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server ready at ${process.env.PORT}`)
    })
};

const startMongoDB = async () => {
  const db = {
    uri: process.env.DB_URI,
  };

  const dbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect(db.uri, dbOption)
    .then(() => console.log("📦 Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
};

startServer();
startMongoDB();
