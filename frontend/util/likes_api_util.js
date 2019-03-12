export const createLike = like => {
  debugger
    return $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: like
    });
  };
  
  export const deleteLike = ({ id }) => {
    debugger
    return $.ajax({
      method: 'DELETE',
      url: `api/likes/${id}`
    });
  };