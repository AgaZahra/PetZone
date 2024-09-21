import React from "react";
import icon from '../assets/media/image/pati-icon.png';

const BackToTop = () => (
  <button className="back-to-top-button"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    <img src={icon} width={50} alt="back-to-top" className="center" />
    <img src={icon} width={38} alt="back-to-top" className="right" />
    <img src={icon} width={30} alt="back-to-top" className="left" />
  </button>
);

export default BackToTop;
