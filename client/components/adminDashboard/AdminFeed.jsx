import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import StudentSubmissionCard from '../students/studentDashboard/StudentSubmissionCard';
import AdminSidebar from './AdminSidebar';
import { fetchSubmissionList } from '../../redux/actions/submissonAction';

import { Layout, Menu, Icon } from 'antd';
import { Table, Divider } from 'antd';

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
    return (
      <>
        <div className='wrapper '>
          <AdminSidebar />

          {/* <div className='grid-col-1'>
            {this.state.submissionList &&
              this.state.submissionList.map(submission => {
                <StudentSubmissionCard submission={submission} />;
              })}
          </div> */}
          <div>
            <h3 className='flex-center heading'>Submission List</h3>

            {/* <Table bordered dataSource={submissionList}>
              <ColumnGroup title='Submission List'>
                <Column
                  width='10%'
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
            </Table> */}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchSubmissionList })(AdminFeed);
