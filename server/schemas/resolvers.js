// const { User } = require('../models');
// const { signToken, AuthenticationError } = require('../utils/auth');

// const resolvers = {
//   Query: {
    
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
//     me: async (parent, args, context) => {
//       if (context.user) {
//       const userData = await User.findOne({ _id: context.user._id }).select("-__v, -password");
//       return userData;
//       }
//       throw new AuthenticationError("Please log in");
//     },
//   },

//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError("Credentials is Incorrect");
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Credentials is Incorrect");
//       }

//       const token = signToken(user);
//       return { token, user };
//     },

//     // Add a third argument to the resolver to access data in our `context`
//     saveBook: async (parent, args, context) => {
//       console.log(context.user);
//       // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
//       if (context.user) {
//       const updateUser = await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           {
//             $addToSet: { savedBooks: args },
//           },
//           {
//             new: true,
//             runValidators: true,
//           }
//         );
//         return updateUser;
//       }
//       // If user attempts to execute this mutation and isn't logged in, throw an error
//       throw  AuthenticationError;
//     },
//     // Set up mutation so a logged in user can only remove their profile and no one else's
//     // removeBook: async (parent, args, context) => {
//     //   if (context.user) {
//     //     return User.findOneAndDelete({ _id: context.user._id });
//     //   }
//     //   throw AuthenticationError;
//     // },
//     // Make it so a logged in user can only remove a skill from their own profile
//     removeBook: async (parent, { bookId }, context) => {
//       if (context.user) {
//         return User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { savedBooks: { bookId: bookId} } },
//           { new: true }
//         );
//       }
//       throw new AuthenticationError("Please log in");
//     },
//   },
// };

// module.exports = resolvers;
