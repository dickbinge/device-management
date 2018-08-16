let baseUrl;
if(process.env.NODE_ENV=='development'){
  baseUrl=process.env.API_ROOT;
};
export default baseUrl;
