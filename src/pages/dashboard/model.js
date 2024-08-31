// import { analyzeStaff } from '@/services/api/analyzeStaff';
// import { useState } from 'react';
// import { useModel } from 'umi';

// export default function Page() {
//   const [amountDataList, setAmountDataList] = useState([]);
//   const [pieList, setPieList] = useState([]);
//   const [marriageData, setMarriageData] = useState({});
//   const [columnList, setColumnList] = useState([]);
//   const [staffData, setStaffData] = useState({});
//   const [constellationData, setConstellationData] = useState({});

//   // 获取数据
//   const analyzeStaffAction = async () => {
//     const res = await analyzeStaff();
//     formatData(res.data);
//   };

//   // 整理数据
//   const formatData = (data) => {
//     setAmountDataList([
//       {
//         title: '总人数',
//         amount: data.total,
//         styleData: { width: '100%', height: '170px' },
//       },
//       {
//         title: '入职1年内员工',
//         amount: data.onboardingTimeData.one,
//         styleData: { width: '33%', height: '170px' },
//       },
//       {
//         title: '入职1-2年内员工',
//         amount: data.onboardingTimeData.two,
//         styleData: { width: '33%', height: '170px' },
//       },
//       {
//         title: '入职3年以上员工',
//         amount: data.onboardingTimeData.three,
//         styleData: { width: '33%', height: '170px' },
//       },
//     ]);

//     setPieList([
//       {
//         title: '学历情况',
//         renderList: data.educationList,
//         styleData: { width: '49.8%', height: '350px' },
//       },
//       {
//         title: '员工性别占比',
//         renderList: data.genderList.map((item) => {
//           return {
//             ...item,
//             age: Number(item.age),
//           };
//         }),

//         styleData: { width: '49.8%', height: '350px' },
//         showSidebar: true,
//       },
//     ]);

//     setMarriageData({
//       title: '婚姻状况',
//       renderList: data.marriageList,
//       styleData: { width: '49.8%', height: '350px' },
//     });

//     setColumnList([
//       {
//         title: '员工年龄段',
//         renderList: data.ageMap.xData.map((item, index) => {
//           return {
//             x: item,
//             y: data.ageMap.yData[index],
//           };
//         }),
//         styleData: { width: '49.8%', height: '350px' },
//       },
//       {
//         title: '部门员工数量',
//         renderList: data.departmentList.xData.map((item, index) => {
//           return {
//             x: item,
//             y: data.departmentList.yData[index],
//           };
//         }),
//         styleData: { width: '49.8%', height: '350px' },
//         br: true,
//       },
//     ]);

//     setStaffData({
//       title: '工龄最老的10个人',
//       renderList: data.wordingYearsMaps,
//       styleData: { width: '49.8%', height: '350px' },
//     });

//     setConstellationData({
//       title: '员工星座分布',
//       renderList: data.constellationList,
//       styleData: { width: '49.8%', height: '350px' },
//       isArea: true,
//     });
//   };
//   return {
//     analyzeStaffAction,
//     amountDataList,
//     pieList,
//     marriageData,
//     columnList,
//     staffData,
//     constellationData,
//   };
// }
