import Http from '../request';

export const getAttendanceTable = () => Http.get('/getAttendanceTable');

// - 考勤信息列表
export const getAttendance = (params = {}) =>
  Http.post('/getAttendance', params);

// - 获取考勤信息详情
export const attendanceDetail = ({ _id }) =>
  Http.get(`/getAttendanceDetail/${_id}`, {});

// - 新增考勤信息
export const createAttendance = (params) =>
  Http.post(`/createAttendance`, params);

// - 修改考勤信息
export const updateAttendance = (params) =>
  Http.put('/updateAttendance', params);

// - 删除指定考勤信息
export const deleteAttendance = (params) =>
  Http.post('/deleteAttendance', params);
