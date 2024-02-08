import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Cartt from "./Cartt";

interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ menu, setMenu }) => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="justify-around flex pt-3 w-full h-16 bg-red-800">
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
      {isWideScreen ? (
        <nav>
          <ul className="flex gap-2">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Man</a></li>
            <li><a href="#">Woman</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      ) : (
        <>
          <Menu menu={menu} setMenu={setMenu} />
          <Cartt />
        </>
      )}
    </header>
  );
};

export default Header;
