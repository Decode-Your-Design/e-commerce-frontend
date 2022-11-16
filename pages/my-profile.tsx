import styles from "../styles/my-profile.module.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
export default function MyProfile() {
  const [userData, setUserData] = useState({});
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
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    if(localStorage.getItem("accessToken")=='null' || localStorage.getItem("accessToken")==null){
      router.push('/')
    }
    else{
    fetchProfile();
    }
  }, []);
  const [login, setLogin] = useState(true);
  return (
    <div className={styles.loginSection}>
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
          name="phone"
          className={styles.input}
          value={userData?.phone}
          placeholder="Enter your phone"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
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

        <button onClick={updateProfile} className={styles.loginSignupButton}>
          Update profile
        </button>
      </div>
    </div>
  );
}
