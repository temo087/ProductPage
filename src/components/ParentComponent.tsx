
import React, { useState } from 'react';
import Cartt from './Cartt';
import Info from './Info';

const ParentComponent: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  return (
    <div>
      <Cartt showCart={showCart} toggleCart={toggleCart} />
      <Info />
    </div>
  );
};

export default ParentComponent;
