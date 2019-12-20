import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function AdminSidebar() {
  return (
    <>
      {/* <div className="flex-column flex-center sidebar">
        <div className="card-heading flex-center">Quick Access</div>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/feed"
        >
          Feed
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/content/list"
        >
          Content List
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/content/new"
        >
            Create Content
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/student/list"
        >
            Student List
        </NavLink>
        <NavLink
          className="dash-link"
          activeClassName="active"
          to="/admin/pending-approvals"
        >
            Pending Approvals
        </NavLink>
      </div> */}
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            paddingTop: '4.5lrem',
          }}
        >
          <div className='logo'>
            <span>Exposure System</span>
          </div>
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
          {/* <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              style={{ padding: 24, background: '#fff', textAlign: 'center' }}
            >
              ...
            </div>
          </Content> */}
          {/* <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer> */}
        </Layout>
      </Layout>
    </>
  );
}

export default AdminSidebar;
