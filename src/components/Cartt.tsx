import React, { useState } from 'react';

const Cartt = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <div>
      <button onClick={toggleShow}>
        <img src="./public/icon-cart.svg" alt="" />
      </button>
      {show && (
        <div className='z-50 fixed -ml-80 mt-12 w-[360px] h-[256px] rounded-xl bg-white'>

        </div>
      )}
    </div>
  );
};

export default Cartt;
