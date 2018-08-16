import {
  proAjaxParams,
  axios,
  baseUrl
} from "../util/index";

const PREFIX='api/v1.0';
const axiosDefaultArgs = {
  withCredentials: true,
};
if(baseUrl){
  axiosDefaultArgs.baseUrl=baseUrl;
}
const  newAxios=axios.create(axiosDefaultArgs);
console.log(typeof (newAxios));
console.log(newAxios);
const DEFAULT_TIMEOUT={
  server:0,
  client:30000,
};
async function ajax(params,timeout=DEFAULT_TIMEOUT){
  const {url,method,payload}=proAjaxParams(params);
  const headers={
    'Timeout':timeout.server/1000,
  };
  // const axiosArgs={
  //   method,
  //   url:`${baseUrl}${PREFIX}${url}`,
  //   data:payload,
  //   headers,
  //   timeout:timeout.client,
  // };
  // try{
  //   let response= await newAxios(axiosArgs);
  //   console.log(response);
  //   return response.data;
  // }catch (e) {
  //   throw handleError(e);
  // }
}

export default ajax;
export {
  ajax,
  PREFIX,
};
