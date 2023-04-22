import React from "react";
import styles from "./Footer.module.scss";
import csss from "./footer.css";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  // return <div className={styles.footer}>&copy; {year} All Rights Reserved</div>;
  return (
    <footer>
      <div class="top_header">
        <section>
          <span>
            <i class="fa fa-map-marker"></i>
          </span>
          <span>Ha Noi, Viet nam</span>
        </section>
        <section>
          <span>
            <i class="fa fa-phone"></i>
          </span>
          <span>035.262.3292</span>
        </section>
        <section>
          <span>
            <i class="fa fa-envelope"></i>
          </span>
          <span>Nvtaikma@gmail.com</span>
        </section>
      </div>
      <span class="border-shape"></span>
      <div class="bottom_content">
        <section>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-telegram"></i>
          </a>
        </section>
        <section>
          <a href="#">Home</a>
          <a href="#">Contact us</a>
          <a href="#">Order</a>
          <a href="#">Cart</a>
        </section>
      </div>
      <div class="copyright">Copyright © 2023</div>
    </footer>
  );
};

export default Footer;
