import { Table, Tag } from 'antd';
import { memo } from 'react';

const columns = [
  {
    title: '姓名',
    dataIndex: 'staffName',
    render: (text) => text?.userName || '--',
  },
  {
    title: '考勤时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '考勤类型',
    dataIndex: 'attendanceType',
    render: (attendanceType) => (
      <Tag color="red">{attendanceType === 4 ? '迟到' : '早退'}</Tag>
    ),
  },
  {
    title: '部门',
    dataIndex: 'staffName',
    render: (text) => <Tag>{text?.departmentName || '暂无部门信息'}</Tag>,
  },
];

const ViolationTable = memo(({ renderList, title }) => {
  return (
    <div className="block-container">
      <div className="title">{title}</div>
      <Table
        rowKey={(record) => record._id}
        columns={columns}
        dataSource={renderList}
        pagination={false}
        style={{ width: '100%' }}
      />
    </div>
  );
});

export default ViolationTable;
