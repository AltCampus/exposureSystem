import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchPendingApprovalList } from '../../redux/actions/adminAction';
import { approveStudent, removeStudent } from '../../redux/actions/adminAction';

import { Table, Divider, Layout, Menu, Icon, Button } from 'antd';
import { Spin } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const { Column, ColumnGroup } = Table;

class PendingApprovals extends Component {
  constructor(props) {
    super(props);
  }

  handleReject = id => {
    this.props.removeStudent(id, this.cb);
  };

  handleApprove = id => {
    this.props.approveStudent(id, this.cb);
  };

  componentDidMount() {
    this.props.fetchPendingApprovalList();
  }

  cb = () => {
    this.componentDidMount();
  };

  render() {
    const pendingStudentList =
      this.props.adminReducer.pendingStudentList &&
      this.props.adminReducer.pendingStudentList.pendingStudents;

    const id =
      this.props.adminReducer.pendingStudentList.pendingStudents &&
      this.props.adminReducer.pendingStudentList.pendingStudents.id;

    return (
      <>
        <div>
          {this.props.adminReducer.isLoadingPendingStudentList ? (
            <div className='flex-center spinner'>
              <Spin size='large' />
            </div>
          ) : (
            <div>
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
                    defaultSelectedKeys={['5']}
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
                    <h3 className='flex-center heading'>Pending Approvals</h3>
                    <Table bordered dataSource={pendingStudentList}>
                      <ColumnGroup title='Student List'>
                        <Column
                          width='20%'
                          title='Username'
                          dataIndex='username'
                          key='username'
                        />
                        <Column
                          width='40%'
                          title='Email'
                          dataIndex='email'
                          key='email'
                        />
                        <Column
                          width='10%'
                          title='Is In Campus'
                          dataIndex='isInCampus'
                          key='isInCampus'
                          render={(text, record) => {
                            return (
                              <span>{record.isInCampus ? 'Yes' : 'No'}</span>
                            );
                          }}
                        />
                        <Column
                          width='10%'
                          title='Is Active'
                          dataIndex='isActive'
                          key='isActive'
                          render={(text, record) => {
                            return (
                              <span>{record.isActive ? 'Yes' : 'No'}</span>
                            );
                          }}
                        />
                        <Column
                          title='Action'
                          key='action'
                          render={(text, record) => (
                            <span>
                              <a onClick={() => this.handleApprove(record._id)}>
                                Approve
                              </a>
                              <Divider type='vertical' />
                              <a onClick={() => this.handleReject(record._id)}>
                                Reject
                              </a>
                            </span>
                          )}
                        />
                      </ColumnGroup>
                    </Table>{' '}
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                    Exposure System ©2018 Created by AltCampus
                  </Footer>
                </Layout>
              </Layout>
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  fetchPendingApprovalList,
  approveStudent,
  removeStudent,
})(PendingApprovals);
