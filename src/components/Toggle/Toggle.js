import { FaChevronLeft } from "react-icons/fa";
import s from "./Toggle.module.css";

export default function Toggle({ reversed = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${s.button} ${reversed ? s.reversed : ""}`}
    >
      <FaChevronLeft size="24" />
    </button>
  );
}
