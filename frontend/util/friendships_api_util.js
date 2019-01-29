export const createFriendship = receiver_id => {
    return (
      $.ajax({
      method: 'POST',
      url: '/api/friendships',
      data: { receiver_id }
    })
  );
};

export const confirmFriendship = (friendship_id, sender_id) => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendship/${friendship_id}`,
    data: { sender_id }
  })
  );
};

export const destroyFriendship = friendship_id => {
    return (
    $.ajax({
      method: 'DELETE',
      url: `/api/friendship/${friendship_id}`
    })
    );
  };