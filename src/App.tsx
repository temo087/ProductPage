import  { useState } from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImigeSlider";
import Menu from "./components/Menu";
import Info from "./components/Info";

function App() {
  const [menu, setMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg"
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
        <Header menu={menu} setMenu={setMenu} />
        <ImageSlider
          images={images}
          currentIndex={currentIndex} 
          nextImage={nextImage}
          prevImage={prevImage}
        />
        <Menu menu={menu} setMenu={setMenu} />
        <Info/>
      </main>
    </>
  );
}

export default App;
