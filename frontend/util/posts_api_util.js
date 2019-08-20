export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: `/api/posts`,
    data: post,
    contentType: false,
    processData: false
  })
);

export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: "/api/posts"
  })
);

export const updatePost = (id, post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${id}`,
    data: { post }
  });
};

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  })
);