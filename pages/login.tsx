import styles from "../styles/login.module.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
export default function login() {
  const router = useRouter()
  const [userDetail, setUserDetail] = useState({
    phone: "",
    password: "",
    userType:"Customer"
  });
  const [login, setLogin] = useState(true);
  const {openToastify,setOpenToastify} = React.useContext(appContext)
  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const signup = async()=>{
  
    const response =await axios.post('http://localhost:8000/api/auth/signUp',userDetail)
    if(response.data.success){
    sessionStorage.setItem('toastifyContent',"Sign up successfull!! Please Login");
    sessionStorage.setItem('backgroundColor',"#28a745");
    setOpenToastify(true)
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
    }
  const loginFunction = async () => {
    
    const response = await axios.post(
      "http://localhost:8000/api/auth/login",
      userDetail
    );
    console.log("this sis r0",response)
    if(response.data.success){
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("userType", response.data.result.userType);
      localStorage.setItem("userId", response.data.result._id);
      sessionStorage.setItem('backgroundColor',"#28a745")
      sessionStorage.setItem("toastifyContent",response.data.message)
      router.push('/')
      setOpenToastify(true)
      setTimeout(()=>{
        // window.location.reload()
      },1000)

    }
          else{
        sessionStorage.setItem('backgroundColor',"red")
        sessionStorage.setItem("toastifyContent",response.data.message)
        setOpenToastify(true)
      }
    // console.log("this is reponse", response);

  };
  return (
    <div className={styles.loginSection}>
      <div className={styles.imageDiv}></div>

      <div className={styles.loginFields}>
        <h1>{login ? "Login":"Sign Up"}</h1>
        <input
          onChange={(e) => handleChange(e)}
          className={styles.input}
          name="phone"
          placeholder="Enter phone number"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="password"
          type="password"
          className={styles.input}
          placeholder="Enter Password"
        />
        {login ? (
          <>
            <button
              onClick={loginFunction}
              className={styles.loginSignupButton}
            >
              Login
            </button>
            <p
              onClick={() => {
                setLogin(false);
              }}
              className={styles.switchUser}
            >
              New user ? Sign up
            </p>
          </>
        ) : (
          <>
            <button onClick={signup} className={styles.loginSignupButton}>
              Sign up
            </button>
            <p
              onClick={() => {
                setLogin(true);
              }}
              className={styles.switchUser}
            >
              Already a user ? Login
            </p>
          </>
        )}
      </div>
    </div>
  );
}
