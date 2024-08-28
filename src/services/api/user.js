import Http from '../request';

// 用户登录
export const userLogin = (params) => Http.post('/login', params);
//- 获取手机验证
export const getSmCode = (params) => Http.get('/getCode', params);
//- 检测验证码输入的是否正确-重置密码进行使用的借口
export const checkedCode = (params) => Http.get('/checkSmCode', params);
//- 重置密码
export const resetPassword = (params) => Http.post('/resetPassword', params);

//- 检测用户是否登录
export const queryUserLogin = () => Http.get('/queryLoginStatus?');
//- 获取路由表
export const getRouteList = () => Http.get('/getRouteList');
