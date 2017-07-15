import _ from 'lodash';

const posts = [
                {
                    id: "123",
                    title: "Bài 1",
                    slug: "bai-1",
                    content: "<strong>Nội dung bài 1</strong>"
                },
                 {
                    id: "345",
                    title: "Bài 2",
                    slug: "bai-2",
                    content: "<strong>Nội dung bài 2</strong>"
                }
            ];

const resolvers = {
    Query: {

        posts: (obj, args, context, info) => {
            // console.log(obj, args, context, info);
            return posts;
        },

        post: (obj, args) => {
            
            console.log(args);

            const result = _.find(posts, { id: args.id });
            console.log(result);
            return result;
        }


    }, // Query

    Mutation: {
        addPost: (obj, args) => {
            posts.push(args);
            return _.find(posts, { id: args.id });
        },
    }
}

export default resolvers;