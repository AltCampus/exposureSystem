import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  fetchContentList,
  deleteContent,
} from '../../redux/actions/contentAction';
import NewContentModal from './NewContentModal';

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
    this.props.deleteContent(id, this.cb);
  };

  render() {
    // console.log(this.props);
    const contentList =
      this.props.adminReducer.contentList &&
      this.props.adminReducer.contentList.contents.reverse();

    return (
      <div>
        {this.props.adminReducer.isLoadingContentList ? (
          <div className='flex-center spinner'>
            <Spin size='large' />
          </div>
        ) : (
          <Layout style={{ height: '98vh' }}>
            <Sider
              breakpoint='lg'
              collapsedWidth='0'
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className='logo'>Exposure System</div>
              <Menu
                theme='dark'
                mode='inline'
                style={{ paddingTop: '2.45rem' }}
                defaultSelectedKeys={['3']}
              >
                <Menu.Item key='1'>
                  <NavLink to='/admin/feed'>
                    <Icon type='user' />
                    <span className='nav-text'>Home</span>
                    {/* <span className='nav-text'>Home (Stats)</span> */}
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='2'>
                  <NavLink to='/admin/feed'>
                    <Icon type='video-camera' />
                    <span className='nav-text'>Submissions</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='3'>
                  <NavLink to='/admin/contents'>
                    <Icon type='video-camera' />
                    <span className='nav-text'>Content List</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='4'>
                  <NavLink to='/admin/students'>
                    <Icon type='video-camera' />
                    <span className='nav-text'>Student List</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='5'>
                  <NavLink to='/admin/pending-approvals'>
                    <Icon type='video-camera' />
                    <span className='nav-text'>Pending Approvals</span>
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header
                style={{
                  background: '#fff',
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#011529',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0 auto',
                    alignItems: 'baseline',
                    width: '90%',
                  }}
                >
                  <NavLink to='/'>
                    <h3>Exposure System</h3>
                  </NavLink>
                  <div
                    style={{
                      marginBottom: '5rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <Button
                      type='link'
                      ghost='true'
                      onClick={this.props.handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
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
              </Content>
              {/* <Footer style={{ textAlign: 'center' }}>
                Exposure System ©2018 Created by AltCampus
              </Footer> */}
            </Layout>
          </Layout>
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
