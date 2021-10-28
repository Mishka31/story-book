import { useState } from "react";
import Logo from "../Logo/Logo.js";
import Navigation from "../Navigation/Navigation.js";
import Toggle from "../Toggle/Toggle.js";
import s from "./AppBar.module.css";

export default function AppBar({ navItems, logoImg, minimized = false }) {
  const [isMinim, setIsMinim] = useState(minimized);
  const toggle = () => setIsMinim((state) => !state);
  console.log(logoImg);
  return (
    <div className={`${s.appbar} ${isMinim ? s.minimized : ""}`}>
      <div className={s.logoContainer}>
        <Logo imageUrl={logoImg} />
      </div>
      <div className={s.container}>
        <Toggle reversed={isMinim} onClick={toggle} />
        <Navigation items={navItems} />
      </div>
    </div>
  );
}
