import React from "react";
import { GitHub, LinkedIn, Instagram, Twitter } from "@material-ui/icons";
import FooterItem from "./FooterItem";

const footerList = [
  {
    icon: <Twitter className="footer__icons" />,
    link: "https://twitter.com/ashishsonamm",
  },
  {
    icon: <Instagram className="footer__icons" />,
    link: "https://instagram.com/ashishsonamm",
  },
  {
    icon: <GitHub className="footer__icons" />,
    link: "https://github.com/ashishsonam",
  },
  {
    icon: <LinkedIn className="footer__icons" />,
    link: "https://www.linkedin.com/in/ashish-sonam-8aa344196/",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <div className="bottom">
          <span>Ashish Sonam &copy; 2021</span>
        </div>
      </div>
      <div className="footer__links">
        {footerList.map((item) => (
          <FooterItem icon={item.icon} link={item.link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
