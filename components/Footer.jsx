import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="mx-auto py-10 max-w-6xl items-center text-white font-medium">
      <p>Copyright &copy; Sello-Hub {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
