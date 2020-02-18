const User = require('./models/User');

// Não precisa de async

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id)
    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
        updateUser: (_, { id, input }) => User.findByIdAndUpdate(id, input, { new: true }),
        deleteUser: (_, { id }) => User.findByIdAndDelete(id)
    },
}