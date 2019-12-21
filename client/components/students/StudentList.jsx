import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchStudentList } from '../../redux/actions/adminAction';
import { removeStudent } from '../../redux/actions/adminAction';

import StudentCard from './StudentCard';

import { Table, Divider, Layout, Menu, Icon, Button, Spin } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const { Column, ColumnGroup } = Table;

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: this.props.adminReducer.studentList,
    };
  }

  cb = () => {
    this.componentDidMount();
  };

  handleReject = id => {
    this.props.removeStudent(id, this.cb);
  };

  componentDidMount() {
    this.props.fetchStudentList();
  }

  render() {
    const studentList =
      this.props.adminReducer.studentList &&
      this.props.adminReducer.studentList.students.reverse();
    console.log(studentList, 'inside student list component');
    return (
      <div>
        {this.props.adminReducer.isLoadingStudentList ? (
          <div className='flex-center spinner'>
            <Spin size='large' />
          </div>
        ) : (
          <Layout>
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
              <Menu theme='dark' mode='inline' defaultSelectedKeys={['i']}>
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
                  <NavLink to='/admin/content'>
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
                <div className='text-center'>
                  <h2 className='heading text-center'>Student List</h2>
                  <Table bordered dataSource={studentList}>
                    <ColumnGroup>
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
                      {/* <Column
                  width='10%'
                  title='Approval Status'
                  dataIndex='isApproved'
                  key='isApproved'
                /> */}
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
                          return <span>{record.isActive ? 'Yes' : 'No'}</span>;
                        }}
                      />

                      <Column
                        width='10%'
                        title='Action'
                        key='action'
                        render={(text, record) => (
                          <span>
                            {/* <a target='_blank' href={record.contentUrl}></a>
                      <Divider type='vertical' /> */}
                            <a onClick={() => this.handleReject(record._id)}>
                              Delete
                            </a>
                          </span>
                        )}
                      />
                    </ColumnGroup>
                  </Table>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Exposure System ©2018 Created by AltCampus
              </Footer>
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
export default connect(mapStateToProps, { fetchStudentList, removeStudent })(
  StudentList,
);
