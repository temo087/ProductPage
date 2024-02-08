import React, { useState, useEffect } from "react";

interface MenuProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ menu, setMenu }) => {
  return (
    <div className={`menu-container ${menu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out absolute left-0 top-0 h-full bg-white w-56`}>
      <div className="h-full">
        <div className="pl-5 -mt-14">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className="h-6 w-6 bg-transparent ml-0.5 mt-3"
          >
            <div
              style={{
                zIndex: "50",
                height: "15px",
                width: "14px",
                backgroundImage: `url("./public/icon-close.svg")`
              }}
            ></div>
          </button>
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className="absolute top-0 right-0 m-3 w-[14px] h-[15px]"
          >
            <img src="./public/icon-close.svg" alt="close-icon" />
          </button>
          <ul className="ml-9 mt-5">
            <li>
              <a href="#">Collections</a>
            </li>
            <li className="mt-5">
              <a href="#">Man</a>
            </li>
            <li className="mt-5">
              <a href="#">Woman</a>
            </li>
            <li className="mt-5">
              <a href="#">About</a>
            </li>
            <li className="mt-5">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Menu;
