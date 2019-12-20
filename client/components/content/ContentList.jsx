import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import { connect } from 'react-redux';
import {
  fetchContentList,
  deleteContent,
} from '../../redux/actions/contentAction';
import NewContentModal from './NewContentModal';
import { Table, Divider } from 'antd';
import { Spin } from 'antd';
const { Column, ColumnGroup } = Table;

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: '',
    };
  }

  cb = () => {
    this.componentDidMount();
  };

  componentDidMount() {
    this.props.fetchContentList();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDelete = id => {
    console.log('delete called');
    this.props.deleteContent(id, this.cb);
  };

  render() {
    console.log(this.props, 'cl');
    const contentList =
      this.props.adminReducer.contentList &&
      this.props.adminReducer.contentList.contents.reverse();

    return (
      <div className='wrapper'>
        <div>
          <AdminSidebar />
        </div>
        {this.props.adminReducer.isLoadingContentList ? (
          <div className='flex-center spinner'>
            <Spin size='large' />
          </div>
        ) : (
          <div>
            <div className='text-center'>
              <h2 className='heading'>Content List</h2>
              <NewContentModal />
              <br></br>
            </div>
            <Table bordered dataSource={contentList}>
              <ColumnGroup>
                <Column
                  width='15%'
                  title='Title'
                  dataIndex='title'
                  key='title'
                />
                <Column
                  width='50%'
                  title='Description'
                  dataIndex='description'
                  key='description'
                />
                <Column width='7%' title='Type' dataIndex='type' key='type' />
                <Column
                  width='8%'
                  title='Action'
                  key='action'
                  render={(text, record) => (
                    <span>
                      <a target='_blank' href={record.contentUrl}>
                        Link
                      </a>
                      <Divider type='vertical' />
                      <a onClick={() => this.handleDelete(record._id)}>
                        Delete
                      </a>
                    </span>
                  )}
                />
              </ColumnGroup>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps, { fetchContentList, deleteContent })(
  ContentList,
);
