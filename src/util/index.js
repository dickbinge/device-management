import axios from 'axios';
import baseUrl from './baseUrl';
const PREFIX='api/v1.0';
function proAjaxParams(params){
  let {url,method='GET',payload={}}=params;
  if(method==='GET'){
    let pattern=/\?/;
    url+=(pattern.test(url)? '&' : '?') + '_now=' + Date.now();
  }
  return {url,method,payload};
}
axios.interceptors.request.use((config)=>{
  return config;
},(err)=>{
  return Promise.resolve(err);
})
axios.interceptors.response.use((data)=>{
  //数据统一校验处理
  return data;
},(err)=>{
  return Promise.resolve(err);
})

function postRequest(url, params) {
  return axios({
    method: 'post',
    url: `${baseUrl}${PREFIX}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
function putRequest(url, params) {
  return axios({
    method: 'put',
    url: `${baseUrl}${PREFIX}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
function deleteRequest(url) {
  return axios({
    method: 'delete',
    url: `${baseUrl}${PREFIX}${url}`
  })
}
 async function getRequest(url) {
  return axios({
    method: 'get',
    url: `${baseUrl}${PREFIX}${url}`
  })
}
export{
  proAjaxParams,
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  axios,
  baseUrl
}
