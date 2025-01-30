import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import users from "./api/users.js"
import domains from './api/domains.js';
import  section  from './api/section.js'

//need query + mutation
// user data/info + get/alter data
// needs typeDefs to define + catagorize data
// resolvers deliver data from query
const typeDefs = gql`
    type Query {
        getUsers: User
        getUserById(id: ID!): User
        domains: [Domain]
    }
    
    type Domain {
        id: ID
        name: String
        desricption: String
        overview: String
        
        sections: [Section!]!
    }
    
    type Section {
        id: ID
        description: String
        docurl: String
        parentname: Domain!

    }

    type Subsec {
        id: ID
        name: String
        description: String
        explanation: String
        terms: [Term!]!
    }
    
    type Term  {
        name: String
        id: ID
        definition: String
        short: String
        example: String
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
        // parent is points to the data listed above 
        getUserById: ( parent, args ) => {
            const id = args.id;
            return users.find((user) => user.id === id );
        },
        domains: () => domains,

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
                id: ( users.length + 1 ).toString() ,
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