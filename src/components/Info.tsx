import React, { useState } from 'react';

const Info: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isCardDeclined, setIsCardDeclined] = useState<boolean>(false);

  const handleIncrement = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = (): void => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleAddToCart = (): void => {
    // Assuming some validation logic here, for demonstration purpose
    if (Math.random() < 0.5) {
      setIsCardDeclined(true);
    } else {
      // Logic to proceed with adding to cart
    }
  };

  return (
    <main className='w-[100%] content-center p-6 font-sans'>
      <h1 className='text-[#FF7E1B] font-bold text-xs tracking-widest uppercase'>Sneaker Company</h1>
      <h1 className='mt-5 text-[#1D2026] text-3xl font-bold leading-8'>Fall Limited Edition Sneakers</h1>
      <h1 className='text-[#69707D] text-base font-normal leading-6 mt-4'>These low-profile sneakers
          are your perfect casual
          wear companion. Featuring
          a durable rubber outer sole,
          they’ll withstand everything
          the weather can offer.</h1>
      <div className='w-[326px] mt-6 h-[34px] flex justify-between'>
        <div className='flex'>
          <h1 className='text-[#1D2026] text-3xl font-bold'>$125.00</h1>
          <div className='text-[#FF7E1B] bg-[#FFEEE2] font-bold rounded-md mt-1.5 ml-4 w-[51px] h-[27px] justify-center flex'>50%</div>
        </div>
        <h1 className='text-[#B6BCC8] line-through mt-2.5 font-bold'>$250.00</h1>
      </div>
      <div className='flex mt-6 w-[327px] h-[56px] justify-evenly bg-[#F6F8FD] rounded-xl'>
        <button className='w-[40px] justify-center pr-5' onClick={handleDecrement}> <img src="./public/icon-minus.svg" alt="" /></button>
        <div className='mt-4 w-[170px] justify-center flex'>{count}</div>
        <button className='w-[40px] justify-center pl-5' onClick={handleIncrement}><img src="./public/icon-plus.svg" alt="" /></button>
      </div>
      <button className=' mt-6 w-[327px] h-[56px] font-bold text-white shadow-2xl-[#FF7E1B] text-base pt-4 rounded-xl flex justify-center bg-[#FF7E1B] ' onClick={handleAddToCart}>
        <img className='mt-1 mr-3' src="./public/white.svg" alt="" /> Add To Cart
      </button>
      {isCardDeclined && <h1 className='text-red-500 mt-4'>Sorry, card declined. <br />
 M A I T A C V A R I  D A V  K L A T</h1>}
    </main>
  );
}

export default Info;
