import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StudentSubmissionCard from '../students/studentDashboard/StudentSubmissionCard';
import AdminSidebar from './AdminSidebar';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class AdminFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubmissionList();
  }

  render() {
    return (
      <>
        {/* <div className='wrapper grid-dashboard'>
          <div>
            <AdminSidebar />
          </div>
          <div className='grid-col-1'> */}
        {/* {this.state.submissionList &&
              this.state.submissionList.map(submission => {
                <StudentSubmissionCard submission={submission} />;
              })} */}
        {/* <StudentSubmissionCard />
            <StudentSubmissionCard />
            <StudentSubmissionCard />
          </div>
        </div> */}
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
              paddingTop: '4.5rem',
            }}
          >
            <div className='logo'>
              <span>Exposure System</span>
            </div>
            <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
              <Menu.Item key='1'>
                <NavLink to='#'>
                  <Icon type='user' />
                  <span className='nav-text'>Home (Stats)</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key='2'>
                <NavLink to='/admin/feed'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>Submissions</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key='3'>
                <NavLink to='/admin/content/list'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>Content List</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key='4'>
                <NavLink to='/admin/student/list'>
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
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div
                style={{ padding: 24, background: '#fff', textAlign: 'center' }}
              >
                ...
              </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer> */}
          </Layout>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchSubmissionList })(AdminFeed);
