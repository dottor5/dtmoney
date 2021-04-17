import React from "react";

import logoImg from "../../assets/logo.svg";
const Header: React.FC = () => {
  return (
    <header>
      <img src={logoImg} alt="dtmoney" />
      <button>Nova transação</button>
    </header>
  );
};

export default Header;
