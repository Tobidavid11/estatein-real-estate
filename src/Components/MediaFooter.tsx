import "../styles/MediaFooter.css";
import fbIcon from "../assets/fb-icon.png";
import inIcon from "../assets/in-icon.png";
import xIcon from "../assets/x-icon.png";
import ytIcon from "../assets/yt-icon.png";

export default function MediaFooter() {
  return (
    <footer className="Media-footer">
      <div className="media-content">
        <div className="text">
          <span>@2024 Estatein. All Rights Reserved.</span>
          <span>Terms & Conditions</span>
        </div>
        <div className="social-media">
          <span className="social-icon fb">
            <img src={fbIcon} alt="facebook" />
          </span>
          <span className="social-icon x">
            <img src={xIcon} alt="x" />
          </span>
          <span className="social-icon in">
            <img src={inIcon} alt="linkedin" />
          </span>
          <span className="social-icon yt">
            <img src={ytIcon} alt="youtube" />
          </span>
        </div>
      </div>
    </footer>
  );
}
