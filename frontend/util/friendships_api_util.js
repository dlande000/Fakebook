export const createFriendship = id => (
  $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: { receiver_id: id }
  })
);

export const confirmFriendship = id => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${id}`
  })
);

export const destroyFriendship = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${id}`
  })
);