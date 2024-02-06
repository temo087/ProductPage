import { useState } from "react";
import "./App.css";
import Arrows from "./components/Arrows";

function App() {
  const [menu, setMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./public/foto1.jpg",
    "./public/foto2.jpg",
    "./public/foto3.jpg",
    "./public/foto4.jpg"
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <main>
        <header className="flex w-[100%] h-[50px] bg-red-800">
          <button
            className="w-[14px] h-[15px] bg-transparent ml-5 mt-5"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <div
              style={{
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
        </header>

        <div className="w-[100%] h-[300px] relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`shoe ${index + 1}`}
              className={index === currentIndex ? "block" : "hidden"}
            />
          ))}
          <Arrows nextImage={nextImage} prevImage={prevImage} />
        </div>

        {menu && (
          <div className="menu-container">
            <div className="pl-5 -mt-14 w-[240px] h-[101%] bg-blue-600 absolute">
              <button
                onClick={() => {
                  setMenu(!menu);
                }}
                className="h-[15px] w-14px bg-transparent ml-0.5 mt-7"
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
              <ul className="ml-9">
                <li className="mt-12">
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
        )}
      </main>
    </>
  );
}

export default App;
