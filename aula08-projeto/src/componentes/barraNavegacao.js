import React from "react";
import { Link } from "react-router-dom";

export default function BarraNavegacao(){
  return (
    <nav style={style.navbar}>
      <ul style={style.navList}>
        <li style={style.navItem}>
          <Link to="/" style={style.navLink}>
            Home
          </Link>
        </li>
        <li style={style.navItem}>
          <Link to="/cadastar-evento" style={style.navLink}>
            Cadastar Evento
          </Link>
        </li>
        <li>
          <Link to="/carrinho" style={style.navLink}>
            Carrinho
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const style = {
  navbar: {
    backgroundColor: "#113d63",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

