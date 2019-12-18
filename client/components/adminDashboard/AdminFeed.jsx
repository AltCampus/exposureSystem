import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      </>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { fetchSubmissionList })(AdminFeed);
