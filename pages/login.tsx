import styles from "../styles/login.module.css";
const login = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__left}>
        <h3 className={styles.primary_heading}>O2 Click</h3>
        <div className={styles.img}>
          <img
            className={styles.img1}
            src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGRhc2hib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <h2 className={styles.secondary_heading}>
          Lorem ipsum dolor sit, amet
        </h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
          eu, suscipit
        </p>
      </div>

      <div className={styles.Container__right}>
        <form className={styles.Container__form}>
          <div className={styles.Container__form1}>
            <label className={styles.label}>Mobile Number:</label>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Enter your Phone number"
              name="mobileNo"
              required
            />
          </div>
          {/* <div className={styles.Container__form2}>
            <label className={styles.label}>Enter your Otp:</label>
            <input
              type="text"
              pattern="\d*"
              className={styles.formControl}
              placeholder="Enter your otp "
              name="otp"
              required
            />
          </div> */}
          {/* <button className={styles.Container__formBtn}>
            <div>Get Otp</div>
          </button> */}
          <button className={styles.Container__formbtn}>Verify otp</button>
        </form>
      </div>
    </div>
  );
};

export default login;
