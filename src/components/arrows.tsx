import React from "react";

type ArrowsProps = {
    nextImage: () => void;
    prevImage: () => void;
};

const Arrows: React.FC<ArrowsProps> = ({ nextImage, prevImage }) => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
            <button className="bg-transparent border-none rounded-full p-2 mr-2" onClick={nextImage}>
                <img className="rotate-180 full" src="./public/next.svg" alt="Next"/>
            </button>
            <button className="bg-transparent border-none rounded-full p-2" onClick={prevImage}>
                <img  src="./public/next.svg" alt="Previous"/>
            </button>
        </div>
    );
};

export default Arrows;
