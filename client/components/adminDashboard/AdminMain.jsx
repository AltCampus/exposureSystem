import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';
import PendingApprovals from '../adminDashboard/PendingApprovals';

import 'antd/dist/antd.css';
import AdminFeed from './AdminFeed';
import ContentList from '../content/ContentList';
import StudentList from '../students/StudentList';

import { Layout, Menu, Icon, Button } from 'antd/lib';
const { Header, Content, Footer, Sider } = Layout;

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { something } = props;
    console.log(this.props);
    return (
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
            {/* ADD CONTENT HERE */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Exposure System ©2018 Created by AltCampus
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchSubmissionList })(Wrapper);
