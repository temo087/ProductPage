import React, { useState } from 'react';

const Kalata = () => {
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
        <div className='w-[360px] h-[256px] rounded-xl bg-white'>

        </div>
      )}
    </div>
  );
};

export default Kalata;
