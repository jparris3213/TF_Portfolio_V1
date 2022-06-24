const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolver = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw new AuthenticationError("Log In!");
        },
    },

    Mutation: {
        addUser: async (
            parent,
            { username, email, password }
        ) => {
            const newuser = await User.create({
                username,
                email,
                password
            });
            const token = signToken(newuser);

            return { token, newuser };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError("No profile with that name or email!");
              }
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {s
                throw new AuthenticationError("Incorrect Password!");
              }
              const token = signToken(user);
              return { token, user };
            },

        removeUser: async (parent, args, context) => {
                if (context.user) {
                  return User.findOneAndDelete({ _id: context.user._id });
                }
                throw new AuthenticationError("You need to be logged in!");
              },
    }
};

module.exports = resolver;