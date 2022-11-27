import styles from "../../styles/footer.module.css";
import { footerItems } from "../../data";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { useRouter } from "next/router";
const Footer = () => {
  const router  = useRouter()
  return (
    <>
      <div className={styles.footer}>
        {[0].map(() => (
          <div className={styles.footerItems}>
            <p className={styles.footerItemHeading}>Top categories</p>
            {footerItems.map((footerItem) => (
              <p
              onClick={() => {
                router.push(`/all-products/${footerItem.url}`);
              }}
              className={styles.footerItem}>{footerItem.heading}</p>
            ))}
          </div>
        ))}

        <div>
          <p className={styles.footerItemHeading}>Connect with us</p>
          <div className={styles.socialMediaIcons}>
            <RiInstagramLine
              style={{ marginLeft: "", color: "#0063d1" }}
              className="mediumIcon icon"
            />
            <RiFacebookFill
              style={{ marginLeft: "0.8rem", color: "#0063d1" }}
              className="mediumIcon icon"
            />
            <RiTwitterLine
              style={{ marginLeft: "0.8rem", color: "#0063d1" }}
              className="mediumIcon icon"
            />
          </div>
          {/* <div className={styles.searchBox}>
          <input className={styles.input} placeholder="Write your query" />
          <button  className={styles.addToCart} >
        Send
    </button>
        </div> */}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright Vigourous Motors </p>
        {/* <p>Made by Gourav and max</p> */}
      </div>
    </>
  );
};

export default Footer;
