export const createFriendship = id => {
    return (
      $.ajax({
      method: 'POST',
      url: '/api/friendships',
      data: { receiver_id: id }
    })
  );
};

export const confirmFriendship = id => {
  return (
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${id}`
  })
  );
};

export const destroyFriendship = id => {
    return (
    $.ajax({
      method: 'DELETE',
      url: `/api/friendships/${id}`
    })
    );
  };