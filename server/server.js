import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// import users from "./users.js"



const users = [
    {
        id: "1",
        name: "Jane",
        comment: "Very Helpful"
    },
    {
        id: "2",
        name: "Jim",
        comment: "Very Well Put"
    },
    {
        id: "3",
        name: "Daesha",
        comment: "I just passed the test!!"
    },
];


//need query + mutation
// user data/info + get/alter data
// needs typeDefs to define + catagorize data
// resolvers deliver data from query
const typeDefs = `
    type Query {
        getUsers: User
    }

    type User {
        id: ID
        name: String
        comment: String
    }   

    type Mutation {
        createUser(name: String!, comment: String!): User 
    }
`
// type Query {
//     getUsers: [User]
//     getUserById(id: ID!): User
// }


// resolves data that is called 
const resolvers = {
    Query: {
        getUsers: () => {
            return users;
        },
        // allows access to parent field from parent type
        // arge allows access to data passed into this query
        // getUserById: (parent, args) => {
        //     const id = args.id
        //     return users.find((user) => user.id ===id)
        // }
    },

    Mutation: {
        createUser: (parent, args) => {
            // what data you need to collect
            const {name, comment} = args;
            // add data as new user 
            const newUser = {
                // id: (users.length + 1).toString(),
                name,
                comment,
            }
            users.push(newUser)
        }
    },
}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`Server running at: Ports ${url}`)