<template>
    <div>
        <h3>Component1</h3>
        <ul>
            <li v-for="post in posts">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    import client from '~plugins/apollo';

    export default {
        
        async asyncData() {
            const query = gql`
                query {
                    posts {
                        id
                        title
                        slug
                        content
                    }
                }
            `;
            
            let { data } = client.query({ query });
            
            console.log(data);

            return {
                posts: data.posts,
            }
        },

         mounted() {
            console.log(this);
        },
    }

</script>