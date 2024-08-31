// import { useEffect } from 'react';
// import { useModel } from 'umi';
// import AgeColumn from './components/AgeColumn';
// import ColumnCpns from './components/ColumnCpns';
// import OldStaffTable from './components/OldStaffTable';
// import PieCpns from './components/PieCpns';
// import StaffAmount from './components/StaffAmount';
// import './css/index.less';

// const dashboard = () => {
//   const {
//     analyzeStaffAction,
//     amountDataList,
//     pieList,
//     marriageData,
//     columnList,
//     staffData,
//     constellationData,
//   } = useModel('dashboard.model');

//   useEffect(() => {
//     analyzeStaffAction();
//   }, []);
//   console.log(staffData);
//   return (
//     <div className="dashboard-container">
//       {/* 员工展示组件 */}
//       {amountDataList.map((item, index) => (
//         <StaffAmount key={index} {...item} />
//       ))}

//       {/* 饼状图处理 学历情况，员工性别 */}
//       {pieList.map((item, index) => (
//         <PieCpns key={index} {...item} />
//       ))}

//       {/* 年龄柱状图 */}
//       {pieList[1] && <AgeColumn {...pieList[1]} />}

//       {/* 员工婚姻状况 */}
//       <PieCpns {...marriageData} />

//       {columnList.map((item, index) => (
//         <ColumnCpns key={index} {...item} />
//       ))}

//       {/* 最老的十名员工 */}
//       <OldStaffTable {...staffData} />

//       {/* 星座分布 */}
//       <PieCpns {...constellationData} />
//     </div>
//   );
// };

// export default dashboard;

import React, { memo } from 'react';

const index = memo(() => {
  return <div>index</div>;
});

export default index;
