
import React from 'react';

interface CarttProps {
  showCart: boolean;
  toggleCart: () => void;
}

const Cartt: React.FC<CarttProps> = ({ showCart, toggleCart }) => {
  return (
    <div className='flex gap-1 mt-4 ml-6'>
      <button className='-mt-3' onClick={toggleCart}>
        <img src="./public/icon-cart.svg" alt="" />
      </button>
      <div><img className='w-[24px] h-[24px] ml-2' src="./public/kaci.png" alt="" /></div>
      {showCart && (
        <div className='z-50 absolute -ml-72 mt-12 w-[360px] h-[256px] rounded-xl bg-white'>
          <h1>cart</h1>
          <div className='bg-[#E4E9F2] w-[360px] h-[1px]'></div>
          <h1 className='text-[#69707D] font-bold'>Your Cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cartt;
