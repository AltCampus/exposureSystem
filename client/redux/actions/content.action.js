const createContent = () => (dispatch) => {
  dispatch({
    type: 'CREATE_CONTENT_START',
  });
  fetch('http://localhost:3000/api/v1/content/new')
    .then((res) => res.json())
    .then((content) => dispatch({
      type: 'CREATE_CONTENT_SUCCESS',
      data: content,
    }));
};

const fetchContentList = () => (dispatch) => {
  dispatch({
    type: 'FETCHING_CONTENT_LIST_START',
  });
  fetch('http://localhost:3000/api/v1/content/list')
    .then((res) => res.json())
    .then((contentList) => dispatch({
      type: 'FETCHING_CONTENT_LIST_SUCCESS',
      data: contentList,
    }));
};


module.exports = { createContent, fetchContentList };
