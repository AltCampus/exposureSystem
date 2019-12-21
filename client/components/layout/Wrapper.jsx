import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderMain from './HeaderMain';

import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            {/* <HeaderMain /> */}
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* {props.children} */}
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Wrapper);
