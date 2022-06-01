import { ApolloServer, gql } from "apollo-server-express";
import { createServer } from "http";
import express from "express";
import typeDefs from "./src/typeDefs/index.js";
import resolvers from "./src/resolvers/digimonResolver.js";

import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const startServer = async () => {

  const app = express();
  const httpServer = createServer(app)

  const server = new ApolloServer({ 
    playground: true,
    typeDefs, 
    resolvers 
  });

  await server.start()

  server.applyMiddleware({
    app,
    path: "/",
  });

  httpServer
    .listen({ port: process.env.DB_PORT || 4000 }, () => {
      console.log(`🚀 Server ready at ${process.env.DB_PORT}`)
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
