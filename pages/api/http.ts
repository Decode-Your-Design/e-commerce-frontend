import axios from "axios";

// const lang = window.localStorage.getItem('i18nextLng')
const http = axios.create({
  baseURL:"http://localhost:8000/api",
  timeout: 75000,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },

});



// http.interceptors.response.use(
//   async function (response) {
//     return { status: true, code: response.status, data: response.data };
//   },
//   function ({ response }) {
//     // return Promise.reject({status: false, code: response.status, ...response.data});
//     if (typeof response !== "undefined") {
//       return { status: false, code: response.status, ...response.data };
//     } else {
//       return { status: false, code: 504, message: "Gateway Timeout." };
//     }
//   }
// );

export default {


  get: async function (url:any, data:any) {
    return new Promise((resolve, reject) => {
      http
        .get(url, { params: data })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getSync: function (url:any, data:any) {
    return new Promise((resolve, reject) => {
      http
        .get(url, { params: data })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },



  post: async function (url:any, data:any) {
    console.log("this is data",data)
    return new Promise((resolve, reject) => {
      http
        .post(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },


  put: async function (url:any, data:any) {
    return new Promise((resolve, reject) => {
      http
        .put(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  delete: async function (url:any, data:any) {
    return new Promise((resolve, reject) => {
      http
        .delete(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  options: async function (url:any, data:any) {
    return new Promise((resolve, reject) => {
      http
        .options(url, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  fetch: (options:any) => http(options),
};