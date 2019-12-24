import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/studentAction';

import { Layout, Menu, Icon, Spin, Button, Card } from 'antd';
import UpdateProfileModal from './UpdateProfileModal';
const { Header, Content, Footer, Sider } = Layout;

class StudentProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, 'inside profile');

    const student = this.props.state.user;
    // console.log(student, 'student');

    return (
      <div>
        <div>
          {/* {this.props.submissionReducer.isLoadingSubmissionList ? (
            <div>
              <div className='flex-center spinner'>
                <Spin size='large' />
              </div>
              <h4
                className='heading flex-center'
                style={{ marginTop: '20rem', paddingRight: '15rem' }}
              >
                We don't have submissions to show you right now
              </h4>
            </div>
          ) : ( */}
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
                defaultSelectedKeys={['2']}
              >
                <Menu.Item key='1'>
                  <NavLink to='/feed'>
                    <Icon type='user' />
                    <span className='nav-text'>Home</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='2'>
                  <NavLink to='/profile'>
                    <Icon type='video-camera' />
                    <span className='nav-text'>Profile</span>
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
                  <h3 className='flex-center heading'>Profile</h3>
                  <div className='text-center'>
                    <div
                      className='flex-center'
                      style={{ background: '#ECECEC', padding: '30px' }}
                    >
                      <Card
                        title={student.username}
                        bordered={false}
                        style={{ width: 300 }}
                      >
                        <p>Email: {student.email}</p>
                        <p>In Campus: {student.isInCampus ? 'Yes' : 'No'}</p>
                        <p>
                          Status: {student.isActive ? 'Active' : 'Not Active'}
                        </p>
                      </Card>
                    </div>
                    <br></br>
                    <UpdateProfileModal {...this.props} />
                    <br></br>
                    <Button type='primary'>Add Github Profile</Button>
                  </div>
                </div>
              </Content>
              {/* <Footer style={{ textAlign: 'center' }}>
                Exposure System ©2018 Created by AltCampus
              </Footer> */}
            </Layout>
          </Layout>
          {/* )} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { updateProfile })(StudentProfile);
