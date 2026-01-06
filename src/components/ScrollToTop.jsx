// ScrollToTop.jsx - Scroll to top button with beautiful styling
import { ArrowUpIcon } from "./Icons";
import "./ScrollToTop.css";

function ScrollToTop({ onClick }) {
  return (
    <button className="scroll-to-top-btn" onClick={onClick} title="Scroll to top">
      <ArrowUpIcon />
      <span className="scroll-btn-ripple"></span>
    </button>
  );
}

export default ScrollToTop;
