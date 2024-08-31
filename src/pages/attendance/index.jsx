// import { memo, useEffect } from 'react';
// import { useModel } from 'umi';
// import ViolationChart from './component/ViolationChart';
// import ViolationTable from './component/ViolationTable';
// import './css/index.less';

// const attendance = memo(() => {
//   const { getAttendanceTableAction, tableList, chartList } =
//     useModel('attendance.model');

//   useEffect(() => {
//     getAttendanceTableAction();
//   }, []);

//   console.log(tableList);
//   return (
//     <div className="attendance-container">
//       <div className="list-container">
//         {chartList?.map((item, index) => {
//           return <ViolationChart key={index} {...item} />;
//         })}
//       </div>
//       <div className="list-container">
//         {tableList?.map((item, index) => {
//           return <ViolationTable key={index} {...item} />;
//         })}
//       </div>
//     </div>
//   );
// });

// export default attendance;

import React, { memo } from 'react';

const index = memo(() => {
  return <div>index</div>;
});

export default index;
