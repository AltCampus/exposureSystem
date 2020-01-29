import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';

import { Layout, Menu, Icon, Table, Divider, Spin, Button } from 'antd';
import AdminWrapper from './AdminWrapper';
const { Column, ColumnGroup } = Table;
const { Header, Content, Footer, Sider } = Layout;

class AdminFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubmissionList();
  }

  render() {
    // const submissionFeed =
    console.log(this.props);
    const submissionList =
      this.props.submissionReducer.submissionList &&
      this.props.submissionReducer.submissionList.submissions.reverse();
    return (
      <AdminWrapper activeKey={'2'}>
        <div>
          {this.props.submissionReducer.isLoadingSubmissionList ? (
            <div>
              <div className='flex-center spinner'>
                <Spin size='large' />
              </div>
              <h4
                className='heading flex-center'
                style={{ marginTop: '20rem', paddingRight: '15rem' }}
              >
                We're pulling up submissions to show you right now...
              </h4>
            </div>
          ) : (
            <div>
              <h3 className='flex-center heading'>Submission List</h3>
              <Table bordered dataSource={submissionList}>
                <ColumnGroup title='Submission List'>
                  <Column
                    width='13%'
                    title='Username'
                    dataIndex='username'
                    key='username'
                  />
                  <Column
                    width='30%'
                    title='Title'
                    dataIndex='title'
                    key='title'
                  />
                  <Column
                    width='50%'
                    title='Summary'
                    dataIndex='contentSummary'
                    key='contentSummary'
                  />
                  <Column
                    width='10%'
                    title='Points Awarded'
                    dataIndex='pointsAwarded'
                    key='pointsAwarded'
                  />
                </ColumnGroup>
              </Table>{' '}
            </div>
          )}
        </div>
      </AdminWrapper>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchSubmissionList })(AdminFeed);
