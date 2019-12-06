export const addContent = data => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/content/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(content => {
        dispatch({ type: "CONTENT_LIST", payload: content });
      });
  };
};
