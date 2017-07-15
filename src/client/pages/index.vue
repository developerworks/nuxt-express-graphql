<template>
  <section class="container">
   
    <h1 class="title">
      Posts
    </h1>

    <ul>
		<li v-for="post in posts">{{ post.title }}</li>
	</ul>

	<button @click="addPost">add Post</button>

  </section>
</template>

<script>
import gql from 'graphql-tag';
import client from '~plugins/apollo';

export default {
    
    async asyncData() {

        let { data } = await client.query({
			query: gql`
				query {
					posts {
						id
						title
						slug
						content
					}
				}
        	`
		});
        
        console.log(data);

        return {
            posts: data.posts,
        }
    },

    mounted() {
		console.log(this);
    },

	methods: {
		getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		async addPost() {
			const number = this.getRandomInt(1, 9999);
			const vm = this;
			const { data } = await client.mutate({
				mutation: gql`
					mutation addPost($id: String!, $title: String, $slug: String, $content: String) {
						addPost(id: $id, title: $title, slug: $slug, content: $content) {
							id,
							title,
							slug,
							content
						}
					}
				`,
				variables: {
					id: `"${number}"`,
					title: `"Bai ${number}"`,
					slug: `"bai-x"`,
					content: `"Noi dung bai ${number}"`,
				}
			});
			console.log(vm);
			vm.posts.push(data.addPost);
		}
	}
}

</script>