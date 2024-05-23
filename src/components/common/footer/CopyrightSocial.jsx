import React from "react";

const CopyrightSocial = () => {
  const socialContent = [
    {
      id: 1,
      iconName: "fa-facebook-f",
      socialLink: "https://web.facebook.com/profile.php?id=61558114324355",
    },
    {
      id: 3,
      iconName: "fa-instagram",
      socialLink: "https://www.instagram.com/isidoramodascl?igsh=MWo2cmw2NGc2c3hpMA==",
    },
  ];

  return (
    <>
      {socialContent.map((social) => (
        <li key={social.id}>
          <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
            <i className={`fab ${social.iconName}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default CopyrightSocial;
