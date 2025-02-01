import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


import domains from './api/domains.js';
import  terms  from './api/terms.js'
import sections from './api/sections.js'


//need query + mutation
// user data/info + get/alter data
// needs typeDefs to define + catagorize data
// resolvers deliver data from query
const typeDefs = `
    type Query {
        getTerms: [Term]
        getDomains: [Domain]       
    }

    type Domain {
        id: ID
        name: String
        description: String
        overview: String
        sections: [Section]
    }

    type Section {
        id: ID
        description: String
        domainId: ID
    }

    type Term {
        name: String
        description: String
        example: String    
    }

`

// resolves data that is called 
const resolvers = {
    Query: {
                
        getDomains: () => {
            return domains;
        },

    },

    Domain: {
        sections: (domain) => {
            return sections.filter((section) => section.domainId === domain.id)
        },
    },

}

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`Server running at: Ports ${url}`)