 import "../styles/Header.css";
import icon from "../assets/Icon.png";
export default function Header() {
  return (
    <div className="header-container">
      <span>
      </span>
<span className="header-text">
✨Discover Your Dream Property with Estatein <a href="#">Learn more</a>
</span>
       <span className="close-icon">
        <img src={icon} alt="" />
       </span>
    </div>
  )
}
