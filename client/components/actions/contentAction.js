export const newContent = data => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/content/new', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(content => {
        dispatch({ type: 'NEW_CONTENT_ADDED', payload: content });
      });
  };
};
