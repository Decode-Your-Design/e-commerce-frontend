import { useRouter } from "next/router";
import styles from "../../styles/home.module.css";
const DealsSlider = ({ deals, next, prev, currentSlide }:any) => {
  const router = useRouter()
  return (
    <>
      <div className={styles.slider}>
        <div className={styles.slider__info}>
          <p className={styles.price}>
            $ {deals[currentSlide] && deals[currentSlide].price}
          </p>
          <p className={styles.title}>
            {deals[currentSlide] && deals[currentSlide].title}
          </p>
        </div>
        <div className={styles.logo}>
          <img
          style={{cursor:'pointer'}}
          onClick={()=>router.push('./product-detail')}
          src={deals[currentSlide] && deals[currentSlide].logo} />
        </div>
      </div>
      <div className={styles.footer}>
        <button
          disabled={currentSlide === 0}
          className={styles.btn}
          onClick={prev}
        >
          Previous deal
        </button>
        <span className={styles.footer_span}>|</span>
        <button
          disabled={currentSlide === deals.length - 1}
          className={styles.btn}
          onClick={next}
        >
          Next deal
        </button>
      </div>
    </>
  );
};

export default DealsSlider;
