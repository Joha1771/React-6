import React from "react";

const FooterLink = ({ title }) => {
  return (
    <li>
      <a href="#" className="text-[#000000] hover:underline text-sm">
        {title}
      </a>
    </li>
  );
};

export default FooterLink;
