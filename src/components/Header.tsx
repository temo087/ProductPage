import Cartt from "./Cartt";
import React from "react";
interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ menu, setMenu }) => {
  return (
    <header className="justify-around flex w-full h-16 bg-red-800">
      <div className="flex">

      <button
        className="w-6 h-6 bg-transparent ml-5 mt-3"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div
          style={{
            zIndex: "99999",
            height: "15px",
            width: "16px",
            backgroundImage: `url("./public/menu.svg")`
          }}
        ></div>
      </button>
      <img
        style={{ width: "137.5px", height: "20px", marginTop: "16px", marginLeft: "16px" }}
        src="./public/logo.svg"
        alt=""
      />
          </div>
<Cartt/>
    </header>
  );
};

export default Header;
