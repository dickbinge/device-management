import ajax from './ajax';
import {fetch} from "./axios";
import {baseUrl} from "../util/index";
const PREFIX='/api/v1.0';
class Account{
  static async getAccountList(){
    return fetch({
      url:baseUrl+PREFIX+"/user/info",
      method:'get'
    })
  }
  //get请求用params post请求用data传递参数
  static  async listAccount(accountID){
    let url="/device/infoByUserId";
    let config={
      url:`${baseUrl}${PREFIX}${url}`,
      method:'post',
      data:accountID
    };
     return fetch(config);
  }
  static async serachAccount(data){
    let url='/user/infoInput';
    let config={
      url:`${baseUrl}${PREFIX}${url}`,
      method:'post',
      data:data
    };
    return fetch(config);
  }
  static async checkAccount(data){
    let url="/user/check_account";
    let config={
      url:`${baseUrl}${PREFIX}${url}`,
      method:'post',
      data:data
    };
    return fetch(config);
  }
  static  async editAccount(data){
    let url="/user/info";
    let config={
      url:`${baseUrl}${PREFIX}${url}`,
      method:'put',
      data:data
    };
    return fetch(config);
  }
  static  addAccount(data){
    let url="/user/info";
    let config= {
      url: `${baseUrl}${PREFIX}${url}`,
      method: 'post',
      data: data
    };
    return fetch(config);
  }
  static async deleteAccount(id){
    let url="/user/info?id="+id;
    let config={
      url:`${baseUrl}${PREFIX}${url}`,
      method:'delete'
    };
    return fetch(config);
  }
}
export default Account;
