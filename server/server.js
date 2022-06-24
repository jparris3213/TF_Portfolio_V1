const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-express");
const express = require("express");
const {http, createServer} = require("http");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
const { authMiddleware } = require("./utils/auth");
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { typeDefs, resolvers } = require('./schemas');

(async function () {
    const app = express();

    const httpServer = createServer(app);

    const schema = makeExecutableSchema( {
        typeDefs,
        resolvers,
    });

    let subscriptionServer;
    const server = new ApolloServer({
        schema,
        context() {
            //lookup userId by token, etc.
            return { userID };
        },
        plugins: [{
            async serverWillStart() {
                return { 
                    async drainServer() {
                        SubscriptionServer.close();
                    }
                };
            }
        }],
    });

    subscriptionServer = SubscriptionServer.create({
        schema,
        execute,
        subscribe,
        onConnect() {
            //lookup userID
            return { userID };
        },

    }, {
        server: httpServer,
        path: server.graphqlPath,
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = 3000;
    httpServer.listen(PORT, () =>
        console.log(`Server is now running on http://localhost:${PORT}/graphql`)
    );
})();
    


