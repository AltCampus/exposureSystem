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
  fetch('http://localhost:3000/api/v1/content/list')
    .then(res => res.json())
    .then(contentList =>
      dispatch({
        type: 'FETCHING_CONTENT_LIST_SUCCESS',
        data: contentList,
      }),
    );
};

const updateContent = (id, cb) => {
  fetch('https://localhost:3000/api/v1/content/update'),
    {
      method: 'PUT',
      body: id,
      headers: {
        'Content-Type': 'application/json',
      },
    };
};

const deleteContent = (id, cb) => {
  console.log(id, 'in action');
  fetch('http://localhost:3000/api/v1/content/delete', {
    method: 'DELETE',
    body: id,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  cb();
};

module.exports = {
  createContent,
  fetchContentList,
  deleteContent,
  updateContent,
};
