import styles from "../styles/my-profile.module.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
import Loader from "../components/loader";
export default function MyProfile() {
  const [userData, setUserData] = useState<any>({});
  const [disableButton,setDisableButton] = useState(false)
  const[loading,setLoading] = React.useState(true)
  const fetchProfile = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/users/fetchUserInfo`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    
    if (response.data.success) {
      setUserData(response.data.result);
      setLoading(false)
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
  };
  const router = useRouter()
  const { openToastify, setOpenToastify } = React.useContext(appContext);
  const updateProfile = async () => {

    let letUserUpdateProfile= true
    if(userData?.phone==undefined || userData?.phone=="" || userData?.password==undefined || userData?.password=="" || userData?.address=="" || userData?.shopName==""){
        alert("All Fields are Required.. सभी फ़ील्ड आवश्यक हैं")
        letUserUpdateProfile=false
      
    }
    if(userData?.phone.length<10){
      letUserUpdateProfile=false
    alert("Please Enter 10 Digit Mobile Number")
    }
    if(letUserUpdateProfile){
      setLoading(true)
    const formdata = new FormData()
    
    const response = await axios.post(
      `http://localhost:8000/api/users/updateUserInfo`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    setLoading(false)
    console.log("thsi is user data", response);
    if (response.data.success) {
      sessionStorage.setItem("backgroundColor", "#28a745");
      sessionStorage.setItem("toastifyContent", response.data.message);
      setOpenToastify(true);
      // fetchProfile()
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
  }
  };
  const changePasswordFunction = async () => {
    
    let letUserUpdateProfile= true
    if(userData?.newPassword==undefined || userData?.newPassword=="" ){
        alert("Please Enter New Password.. कृपया नया पासवर्ड दर्ज करें")
        letUserUpdateProfile=false
      
    }

    if(letUserUpdateProfile){
      setLoading(true)
    const formdata = new FormData()
    
    const response = await axios.post(
      `http://localhost:8000/api/auth/changePassword`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log("thsi is user data", response);
    setLoading(false)
    if (response.data.success) {
      sessionStorage.setItem("backgroundColor", "#28a745");
      sessionStorage.setItem("toastifyContent", response.data.message);
      setChangePassword(false)
      setOpenToastify(true);
      // fetchProfile()
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
  }
  };

  const [changePassword,setChangePassword] = useState(false)
  const handleChange = (e:any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    if(localStorage.getItem("accessToken")=='null' || localStorage.getItem("accessToken")==null){
      router.push('/')
    }
    else{
      fetchProfile()
    }
  }, [router,setOpenToastify]);
  const [login, setLogin] = useState(true);
  return (
    
      loading ? 
      <Loader/>
    :
    <div className={styles.loginSection}>
      {
        changePassword ?
        <div className={styles.loginFields} >
              <h1>Change password</h1>
        <input
          onChange={(e) => handleChange(e)}
          name="newPassword"
          className={styles.input}
          value={userData?.newPassword}
          placeholder="Enter New Password"
        />
            <button onClick={changePasswordFunction} className={styles.loginSignupButton}>
          Change password
        </button>
        <p onClick={()=>{
          setChangePassword(false)
        }} >
          Show Profile
        </p>
          </div>
      :
      <div className={styles.loginFields}>
        <h1>My profile</h1>
        <input
          onChange={(e) => handleChange(e)}
          name="fullName"
          className={styles.input}
          value={userData?.fullName}
          placeholder="Enter your name"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          maxLength={10}
          name="phone"
          className={styles.input}
          value={userData?.phone}
          placeholder="Enter your phone"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          disabled
          className={styles.input}
          value={userData?.password}
          placeholder="Enter your password"
        />
        {userData.userType=="Vendor" && (
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="shopName"
            className={styles.input}
            value={userData?.shopName}
            placeholder="Enter your shop name"
          />
        )}
        {userData.userType=="Vendor" && (
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="address"
            className={styles.input}
            value={userData?.address}
            placeholder="Enter your shop address"
          />
        )}
        {changePassword && (
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            name="newPassword"
            className={styles.input}
            value={userData?.newPassword}
            placeholder="Enter new password"
          />
        )}

        <button  onClick={updateProfile} className={styles.loginSignupButton}>
          Update profile
        </button>
        <p onClick={()=>{
          setChangePassword(true)
        }} >
          Change Password
        </p>
      </div>
      }
    
    </div>
  );
}
