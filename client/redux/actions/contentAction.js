const createContent = (data, cb) => dispatch => {
  console.log(data, 'whats data');
  dispatch({
    type: 'CREATE_CONTENT_START',
  });
  fetch('http://localhost:3000/api/v1/content/new', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(content => {
      console.log(content, 'in create content');
      dispatch({
        type: 'CREATE_CONTENT_SUCCESS',
        data: content,
      });
      swal({
        title: `${content.title}`,
        text: 'created',
        icon: 'success',
      }),
        cb();
    });
};

const fetchContentList = () => dispatch => {
  dispatch({
    type: 'FETCHING_CONTENT_LIST_START',
  });
  fetch('http://localhost:3000/api/v1/content/')
    .then(res => res.json())
    .then(contentList =>
      dispatch({
        type: 'FETCHING_CONTENT_LIST_SUCCESS',
        data: contentList,
      }),
    );
};

const updateContent = (data, cb) => {
  console.log(data, 'in action');
  fetch('http://localhost:3000/api/v1/content/update', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  cb();
};

const deleteContent = id => dispatch => {
  console.log(id, 'in action');
  const url = `http://localhost:3000/api/v1/content/delete/${id}`;
  fetch(url, {
    method: 'DELETE',
    // body: { id: id },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res in action');
      swal({
        title: 'Content has been deleted',
        text: 'Deleted!',
        icon: 'success',
      });
    })
    .catch(err => alert(err));
};

module.exports = {
  createContent,
  fetchContentList,
  deleteContent,
  updateContent,
};
