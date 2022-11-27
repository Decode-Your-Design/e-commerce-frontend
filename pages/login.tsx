import styles from "../styles/login.module.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
import Loader from "../components/loader";
export default function Login() {
  const router = useRouter()
  const [userDetail, setUserDetail] = useState<any>({
    phone: "",
    password: "",
    userType:"Customer"
  });
  const [login, setLogin] = useState(false);
  const[loading,setLoading] = React.useState(false)
  const {openToastify,setOpenToastify} = React.useContext(appContext)
  const handleChange = (e:any) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };
  const signup = async()=>{
  
    let letUserSign = true
  for(const key in userDetail){

    if(userDetail[key]==""){
      letUserSign=false
      alert("All Fields are Required.. सभी फ़ील्ड आवश्यक हैं")
    }
  }
  if(userDetail?.phone.length<10 || userDetail?.phone.length>10){
    letUserSign=false
    alert("Please Enter 10 digit Phone Number")
  }
  if(letUserSign){
    setLoading(true)
    // setDisableButton(true)
    const response =await axios.post('http://localhost:8000/api/auth/signUp',userDetail)
    // setDisableButton(false)
    setLoading(false)
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
    }
  const loginFunction = async () => {
  
    let letUserLogin = true
    for(const key in userDetail){
  
      if(userDetail[key]==""){
        alert("All Fields are Required.. सभी फ़ील्ड आवश्यक हैं")
        letUserLogin=false
      }
    }
    if(userDetail?.phone.length<10 || userDetail?.phone.length>10){
      letUserLogin=false
      alert("Please Enter 10 digit Phone Number")
    }

    if(letUserLogin){
      setLoading(true)
    const response = await axios.post(
      "http://localhost:8000/api/auth/login",
      userDetail
    );
    setLoading(false)
    // setDisableButton(false)
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
    }
    // console.log("this is reponse", response);

  };
  const [disableButton,setDisableButton] = useState(false)
  return (
    loading ? 
    <>
    <Loader/>
    </>
    :
    <div className={styles.loginSection}>
      <div className={styles.imageDiv}></div>

      <div className={styles.loginFields}>
        <h1>{login ? "Login":"Sign Up"}</h1>
        <input
          onChange={(e) => handleChange(e)}
          className={styles.input}
          name="phone"
          type="number"
          maxLength={10}
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
            <button  onClick={signup} className={styles.loginSignupButton}>
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
