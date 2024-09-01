import qs from 'qs';
import { request } from 'umi';
// 封装 HTTP 请求方法
class Http {
  // POST 请求处理
  post(url: string, params: any = {}, options: any = {}) {
    return request(url, {
      method: 'POST',
      data: params,
      ...options,
    });
  }

  // PUT 请求处理
  put(url: string, params: any = {}, options: any = {}) {
    return request(url, {
      method: 'PUT',
      data: params,
      ...options,
    });
  }

  // GET 请求处理
  get(url: string, options: any = {}) {
    // 使用 qs.stringify 处理查询参数
    const queryString = qs.stringify(options);
    return request(`${url}?${queryString}`, {
      method: 'GET',
      ...options,
    });
  }

  // DELETE 请求处理
  // del(url: string, options: any = {}) {
  //   // 使用 qs.stringify 处理查询参数
  //   const queryString = qs.stringify(options);
  //   return request(`${url}?${queryString}`, {
  //     method: 'DELETE',
  //     ...options,
  //   });
  // }
}

const resFun = new Http();
export default resFun;
