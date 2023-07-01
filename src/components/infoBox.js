import { FaFacebookF } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
export const InfoBox = ({ src, name, email, num }) => {
  return (
    <div className="infoBox">
      <img src={src} className="imgInfo" />
      <div className="infoText">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>PH Num: {num}</div>
      </div>
      <div className="SocialMediaContainer">
        <a
          href="https://www.facebook.com/profile.php?id=100050827651170"
          className="link"
        >
          <FaFacebookF className="socialMedia" />
        </a>
        <a href="https://t.me/Kaungkhant9koji">
          <BsTelegram className="socialMedia" />
        </a>
        <a href="https://twitter.com/kaungkhants892" className="link">
          <FaTwitter className="socialMedia" />
        </a>
      </div>
    </div>
  );
};
//https://twitter.com/kaungkhants892
