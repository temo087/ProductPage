import React from "react";

type ArrowsProps = {
    nextImage: () => void;
    prevImage: () => void;
};

const Arrows: React.FC<ArrowsProps> = ({ nextImage, prevImage }) => {
    return (
        <div className=" w-[100%] p-4 justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
            <button className="hover:bg-orange-400 transition-[0.5s] w-[40px] h-[40px] bg-white rounded-full  border-none  p-2 mr-2" onClick={nextImage}>
                <img className="hover:animate-pulse rotate-180 ml-1" src="./public/next.svg" alt="Next"/>
            </button>
            <button className="hover:bg-orange-400  rounded-full bg-white  w-[40px] h-[40px] border-none  p-2" onClick={prevImage}>
                <img className="ml-2 hover:animate-pulse  "   src="./public/next.svg" alt="Previous"/>
            </button>
        </div>
    );
};

export default Arrows;
