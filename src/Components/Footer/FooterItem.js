import React from "react";

const FooterItem = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" title="twitter">
      {icon}
    </a>
  );
};

export default FooterItem;
