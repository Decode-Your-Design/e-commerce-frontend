// import axios from "axios";
// // import { withRouter } from "react-router";
// // import { ActionTypes } from "../../Redux/Contants/ActionType";
// // import { showMessage } from "../../Redux/Reducers/messageSlice";
// // import store from "../../Redux/Store";
// // import AppConfig from "../../AppConfig";
// // import FuseUtils from "../../Utils/FuseUtils";
// import http from "./http";
// /* eslint-disable camelcase */

// class ApiService extends FuseUtils.EventEmitter {
//   // init() {
//   //   this.setInterceptors();
//   //   this.handleAuthentication();
//   // }

//   // handleAuthentication = () => {
//   //   const access_token = this.getAccessToken();
//   //   if (!access_token) {
//   //     this.emit("onNoAccessToken");
//   //     return;
//   //   }
//   //   if (this.isAuthTokenValid(access_token)) {
//   //     this.setSession(access_token);
//   //     this.emit("onAutoLogin", true);
//   //   } else {
//   //     this.setSession(null);
//   //     this.emit("onAutoLogout", "access_token expired");
//   //   }
//   // };

//   // setInterseptorRequest = () => {
//   //   axios.interceptors.request.use((req) => {
//   //     let accessToken = this.getAccessToken();
//   //     req.headers.authorization = "my secret token";
//   //     req.baseURL = AppConfig.apiUrl;
//   //     req.headers.accept = "application/json";
//   //     req.headers["Content-Type"] = "application/json";
//   //     req.headers.authorization = accessToken
//   //       ? "Bearer " + accessToken
//   //       : "Bearer ";
//   //     req.headers.Authorization = accessToken
//   //       ? "Bearer " + accessToken
//   //       : "Bearer ";
//   //     return req;
//   //   });
//   // };

//   // setInterceptors = () => {
//   //   axios.interceptors.response.use(
//   //     (response) => {
//   //       return response;
//   //     },
//   //     (err) => {
//   //       return new Promise((resolve, reject) => {
//   //         if (
//   //           (err.response.code === 200) === 401 &&
//   //           err.config &&
//   //           !err.config.__isRetryRequest
//   //         ) {
//   //           // if you ever get an unauthorized response, logout the user
//   //           this.emit("onAutoLogout", "Invalid access_token");
//   //           this.setSession(null);
//   //           // JwtService.removeUserData();
//   //         }
//   //         throw err;
//   //       });
//   //     }
//   //   );
//   // };

//   isMobileNoExist= () => {
//     return new Promise((resolve, reject) => {
//       http.post("/isMobileNoExist").then((response) => {

//         if (response.code === 200) {
//           resolve(response);
//           // store.dispatch(showMessage({ message: 'Successfully Retrived', variant: 'success' }));
//         } else if (response.code === 504) {
//           // store.dispatch(
//           //   showMessage({ message: response.message, variant: "error" })
//           // );
//         } else {
//           reject(response);
//         }
//       });
//     });
//   };

  
//   getAccessToken = () => {
//     // return window.sessionStorage.getItem(AppConfig.localAppKey);
//   };
// }

// const instance = new ApiService();

// export default withRouter(instance);