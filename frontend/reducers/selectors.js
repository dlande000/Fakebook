export const getAllPosts = state => {
    const posts = state.entities.posts;
	return Object.keys(posts).map(id => posts[id]);
};

export const getPostsForWall = (state, id) => {
	let result = [];
    getAllPosts(state).forEach(post => {
        if (post.receiver_id === id) {
            result.push(post);
        }
    });
    return result;
};