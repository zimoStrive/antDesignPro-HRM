// import { getAttendanceTable } from '@/services/api/attendance';
// import { formatDate } from '@/utils/format';
// import { useState } from 'react';

// export default function Page() {
//   const [tableList, setTableList] = useState([]);
//   const [chartList, setChartList] = useState([]);

//   // 获取数据
//   const getAttendanceTableAction = async () => {
//     const res = await getAttendanceTable();

//     if (res.data) {
//       setTableList([
//         { title: '迟到详情', renderList: res.data.lateTable.map((item) => {
//             return {
//               ...item,
//               createTime: formatDate(item.createTime),
//             };
//           }), },
//         {
//           title: '早退详情',
//           renderList: res.data.earlyTable.map((item) => {
//             return {
//               ...item,
//               createTime: formatDate(item.createTime),
//             };
//           }),
//         },
//       ]);

//       setChartList([
//         {
//           title: '迟到员工数量',
//           renderList: res.data.lateBI.xData.map((item, index) => {
//             return { x: formatDate(item), y: res.data.lateBI.yData[index] };
//           }),
//         },
//         {
//           title: '早退员工数量',
//           renderList: res.data.earlyBI.xData.map((item, index) => {
//             return { x: formatDate(item), y: res.data.earlyBI.yData[index] };
//           }),
//         },
//       ]);
//     }
//   };
//   return { tableList, chartList, getAttendanceTableAction };
// }
