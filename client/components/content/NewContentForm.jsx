import React, { Component } from 'react';
import { createContent } from '../../redux/actions/contentAction';
import { connect } from 'react-redux';
import AdminSidebar from '../adminDashboard/AdminSidebar';

class NewContentForm extends Component {
  constructor() {
    super();
    this.state = {
      type: '',
      url: '',
      title: '',
      description: '',
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  cb = () => {
    this.props.history.push('/admin/content/list');
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      type: this.state.type,
      contentUrl: this.state.url,
      title: this.state.title,
      description: this.state.description,
    };
    this.props.createContent(data, this.cb);
  };

  render() {
    // console.log(this.props);
    // console.log(this.state, 'state');
    return (
      <>
        <div className="wrapper grid-dashboard">
          <div>
            <AdminSidebar />
          </div>
          <form
            className="flex-column flex-center"
            // onSubmit={this.handleSubmit}
          >
            <select
              name="type"
              className="input input-select"
              onClick={this.handleChange}
              defaultValue={'DEFAULT'}
            >
              <option value="DEFAULT" disabled>
                Type
              </option>
              <option className="input" value="resource">
                Resource
              </option>
              <option className="input" value="challenge">
                Challenge
              </option>
            </select>

            <input
              name="url"
              className="input"
              type="text"
              placeholder="Content Url"
              value={this.state.contentUrl}
              onChange={this.handleChange}
            ></input>
            <input
              name="title"
              className="input"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
            <textarea
              name="description"
              className="input"
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
            <button
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Add Content
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { createContent })(NewContentForm);
