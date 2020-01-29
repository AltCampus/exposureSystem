import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  fetchContentList,
  deleteContent,
} from '../../redux/actions/contentAction';
import NewContentModal from './NewContentModal';
import AdminWrapper from '../adminDashboard/AdminWrapper';

import { Table, Divider, Spin, Layout, Menu, Icon, Button } from 'antd/lib';
import UpdateContentModal from './UpdateContentModal';
const { Header, Content, Footer, Sider } = Layout;
const { Column, ColumnGroup } = Table;

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: '',
    };
  }

  componentDidMount() {
    this.props.fetchContentList();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDelete = id => {
    this.props.deleteContent(id, this.componentDidMount);
  };

  render() {
    // console.log(this.props);
    const contentList =
      this.props.adminReducer.contentList &&
      this.props.adminReducer.contentList.contents;

    return (
      <AdminWrapper>
        <div>
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
                    width='10%'
                    title='Title'
                    dataIndex='title'
                    key='title'
                  />
                  <Column
                    width='45%'
                    title='Description'
                    dataIndex='description'
                    key='description'
                  />
                  <Column
                    width='5%'
                    title='Type'
                    dataIndex='type'
                    key='type'
                    style={{ textAlign: 'center' }}
                  />
                  <Column
                    width='10%'
                    title='Action'
                    key='action'
                    render={(text, record) => (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                        }}
                      >
                        <a target='_blank' href={record.contentUrl}>
                          Link
                        </a>
                        <Divider type='vertical' />
                        <UpdateContentModal record={record} />
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
      </AdminWrapper>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps, { fetchContentList, deleteContent })(
  ContentList,
);
