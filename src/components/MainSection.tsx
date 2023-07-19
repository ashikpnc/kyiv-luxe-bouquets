import React from "react";
import styles from "@/styles/MainSection.module.scss";
import Image from "next/image";
import ImgHero from "../../public/images/img hero.png";
import Link from "next/link";

type Props = {};

const MainSection = (props: Props) => {
  return (
    <main className={styles.main}>
      <div className={styles.left_col}>
        <div className={styles.row1}>
          <div className={styles.heading}>
            <span className={styles.title}>Kyiv LuxeBouquets</span>
            <span className={styles.trademark}>®</span>
          </div>
          <p className={styles.text}>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.decor_col} ${styles.decor_col_l}`}>
            <Image src={ImgHero} alt="" className={styles.decor_col_img} />
          </div>
          <div className={`${styles.decor_col} ${styles.decor_col_r}`}>
            <p className={styles.decor_col_text}>
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right_col}>
        <div className={styles.content_cat}>
          <div className={styles.card_cat}>
            <div className={styles.card_cat_label}>
              <p className={styles.card_cat_label_text}>Fresh Flowers</p>
            </div>
            <Link href={""} className={styles.card_cat_text}>
              <p className={styles.card_cat_shopnow}>Shop now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.card_cat_svg}
              >
                <path
                  d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div className={`${styles.card_item} ${styles.card_item_1}`}></div>
          <div className={styles.card_cat}>
            <div className={styles.card_cat_label}>
              <p className={styles.card_cat_label_text}>Live Plants</p>
            </div>
            <Link href={""} className={styles.card_cat_text}>
              <p className={styles.card_cat_shopnow}>Shop now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.card_cat_svg}
              >
                <path
                  d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div className={`${styles.card_item} ${styles.card_item_2}`}></div>
          <div className={styles.card_cat}>
            <div className={styles.card_cat_label}>
              <p className={styles.card_cat_label_text}>Fresheners</p>
            </div>
            <Link href={""} className={styles.card_cat_text}>
              <p className={styles.card_cat_shopnow}>Shop now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.card_cat_svg}
              >
                <path
                  d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.content_cat}>
          <div
            className={`${styles.card_item} ${styles.card_item_3} ${styles.card_item_r}`}
          ></div>
          <div className={`${styles.card_cat} ${styles.card_cat_r}`}>
            <div className={styles.card_cat_label}>
              <p className={styles.card_cat_label_text}>Fresh Flowers</p>
            </div>
            <Link href={""} className={styles.card_cat_text}>
              <p className={styles.card_cat_shopnow}>Shop now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.card_cat_svg}
              >
                <path
                  d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div
            className={`${styles.card_item} ${styles.card_item_4} ${styles.card_item_r}`}
          ></div>
          <div className={`${styles.card_cat} ${styles.card_cat_r}`}>
            <div className={styles.card_cat_label}>
              <p className={styles.card_cat_label_text}>Fresh Flowers</p>
            </div>
            <Link href={""} className={styles.card_cat_text}>
              <p className={styles.card_cat_shopnow}>Shop now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.card_cat_svg}
              >
                <path
                  d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
          <div
            className={`${styles.card_item} ${styles.card_item_5} ${styles.card_item_r}`}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
