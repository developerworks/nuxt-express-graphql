import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type Post {
        id: String!
        title: String
        slug: String
        content: String
    }

    type Query {
        posts: [Post],
        post(id: String): Post
    }

    type Mutation {
        addPost(
            id: String!,
            title: String,
            slug: String,
            content: String
        ): Post
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers,
})