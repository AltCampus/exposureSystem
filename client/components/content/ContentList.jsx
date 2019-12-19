import React, { Component } from 'react';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import ContentCard from './ContentCard';
import { connect } from 'react-redux';

import { fetchContentList } from '../../redux/actions/contentAction';

import { Table, Divider } from 'antd';
const { Column, ColumnGroup } = Table;

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: '',
    };
  }

  componentDidMount() {
    this.props.fetchContentList();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.props);
    const contentList =
      this.props.adminReducer.contentList &&
      this.props.adminReducer.contentList.contents.reverse();
    console.log(contentList, 'cc');
    // console.log(contentList.reverse(), 'reversd');

    return (
      <div className='wrapper'>
        <div>
          <AdminSidebar />
        </div>
        {/* <div>
          <h3 className='flex-center' style={{ color: 'rgb(59, 57, 57)' }}>
            Content List
          </h3>
          <div className='grid-col-3'>
            {contentList &&
              contentList.map((content, i) => {
                return <ContentCard key={i} content={content} />;
              })}
          </div>
        </div> */}
        <div>
          <h2 className='heading text-center'>Content List</h2>
          <Table bordered dataSource={contentList}>
            <ColumnGroup>
              <Column width='25%' title='Title' dataIndex='title' key='title' />
              <Column
                width='55%'
                title='Description'
                dataIndex='description'
                key='description'
              />
              <Column width='10%' title='Type' dataIndex='type' key='type' />
              {/* <Column width='10%' title='ContentID' dataIndex='_id' key='_id' /> */}

              <Column
                title='Action'
                key='action'
                render={(text, record) => (
                  <span>
                    <a target='_blank' href={record.contentUrl}></a>
                    <Divider type='vertical' />
                    <a>Delete</a>
                  </span>
                )}
              />
            </ColumnGroup>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps, { fetchContentList })(ContentList);
