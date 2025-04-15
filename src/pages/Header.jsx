import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="flex h-15 justify-evenly items-center bg-gray-800 text-white px-4">
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        首頁
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/products">
        產品列表
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/form">
        表單驗證
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/todo"
      >
        代辦事項
      </NavLink>
    </nav>
  );
};

export default Header;
