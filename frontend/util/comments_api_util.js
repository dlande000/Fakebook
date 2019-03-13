export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment
  })
);

export const updateComment = (id, comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/comments/${id}`,
    data: { comment }
  });
};

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);