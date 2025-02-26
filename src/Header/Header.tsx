import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

import "./header.css";

export default function Header() {
  return (
    <header className="flex-row">
      <Link to="/">
        <Logo />
      </Link>
      <a
        href="https://br.linkedin.com/in/marcel-eballar-961345317"
        target="_blank"
        rel="noreferrer"
      >
        by MARCEL
      </a>
    </header>
  );
}
