import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { adminLogout } from '../../redux/actions/adminAction';

import { Layout, Menu, Icon, Table, Divider, Spin, Button } from 'antd';
const { Column, ColumnGroup } = Table;
const { Header, Content, Footer, Sider } = Layout;

class AdminWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <>
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
              //   defaultSelectedKeys={['1']}
              defaultSelectedKeys={[this.props.activeKey]}
            >
              <Menu.Item key='1'>
                <Link to='/admin/feed'>
                  <Icon type='user' />
                  <span className='nav-text'>Stats</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to='/admin/feed'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>Submissions</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link to='/admin/contents'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>Content List</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Link to='/admin/students'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>Student List</span>
                </Link>
              </Menu.Item>
              <Menu.Item key='5'>
                <Link to='/admin/pending-approvals'>
                  <Icon type='video-camera' />
                  <span className='nav-text'>Pending Approvals</span>
                </Link>
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
                <Link to='/'>
                  <h3>Exposure System</h3>
                </Link>
                <div
                  style={{
                    marginBottom: '5rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <Button
                    type='link'
                    ghost='true'
                    onClick={() =>
                      this.props.adminLogout(() => {
                        this.props.history.push('/');
                      })
                    }
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              {/* <h3 className='flex-center heading'>Submission List</h3> */}
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { adminLogout })(
  withRouter(AdminWrapper),
);
