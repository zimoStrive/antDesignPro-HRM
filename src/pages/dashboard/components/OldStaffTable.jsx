import { Table, Tag } from 'antd';
import { memo } from 'react';

const columns = [
  {
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    render: (text) => {
      if (text) {
        return <Tag color="success">{text}</Tag>;
      } else {
        return <Tag color="error">未分配</Tag>;
      }
    },
  },
];

const OldStaffTable = memo(({ styleData, title, renderList }) => {
  return (
    <div className="staff-amount-container" style={{ ...styleData }}>
      <div className="staff-amount_title">{title}</div>
      <div className="staff-amount_content">
        <Table
          rowKey={(record) => `${record.userName}-${record.department}`}
          columns={columns}
          dataSource={renderList}
          pagination={false}
          scroll={{ y: 250 }}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
});

export default OldStaffTable;
